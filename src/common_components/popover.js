import React, { cloneElement, useState, useEffect, useRef } from "react";
import { string, shape, bool, func, node } from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  .il-bl {
    display: inline-block;
    vertical-align: top;
  }

  .popover {
    position: relative;
    display: inline-block;
    height: 100%;
    background-color: transparent;
  }

  .popover-content {
    width: 200px;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    position: absolute;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    border-top: 1px solid #e9e3c8;
    border-radius: 3px;
    outline: 0;
    padding: 16px;
    border-top: 3px solid #eeab5d;
  }

  .popover-content.-arrow {
    margin-top: 10px;
  }

  .popover-content.-arrow::before,
  .popover-content::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 10px;
  }

  .popover-content.-arrow::before {
    top: -10px;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.15);
  }

  .popover-content.-arrow::after {
    top: -10px;
    margin-left: 1px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #fff;
  }
`;

const TriggerCover = styled.div`
  height: 100%;
`;

const PopoverContent = ({
  className,
  placement,
  showArrow,
  style,
  closeOnClick,
  onClose,
  onClickOutSide,
  children,
}) => {
  const node = useRef();

  const handleClickOutSide = (e) => {
    if (node.current) {
      if (closeOnClick) {
        onClose();
      } else {
        if (!node.current.contains(e.target)) {
          onClickOutSide();
        }
      }
    }
  };

  useEffect(() => {
    if (node.current) {
      node.current.focus();
    }
    window.document.addEventListener("click", handleClickOutSide, false);
    return () => {
      if (node.current) {
        node.current.blur();
      }
      window.document.removeEventListener("click", handleClickOutSide, false);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <div
      ref={node}
      tabIndex="-1"
      onKeyDown={onKeyDown}
      className={`popover-content${className ? " " + className : ""}${
        placement ? " " + placement : ""
      }${showArrow ? " -arrow" : ""}`}
      style={style}
    >
      <div className="popover-inner">{children}</div>
    </div>
  );
};

const Popover = ({
  visible: propVisible,
  onOuterClick,
  triggerNode,
  trigger,
  showArrow,
  placement,
  className,
  style,
  closeOnClick,
  children,
}) => {
  const [visible, setVisible] = useState(propVisible);

  const onShow = (e) => {
    e.stopPropagation();
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onToggle = (e) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const onClickOutSide = () => {
    onClose();
    onOuterClick();
  };

  return (
    <div className="popover">
      {triggerNode &&
        cloneElement(triggerNode, {
          onClick: trigger === "click" || trigger === "hover" ? onToggle : null,
          onMouseOver: trigger === "hover" ? onShow : null,
        })}

      {visible && (
        <PopoverContent
          showArrow={showArrow}
          placement={placement}
          closeOnClick={closeOnClick}
          onClickOutSide={onClickOutSide}
          className={className}
          style={style}
          onClose={onClose}
        >
          {children}
        </PopoverContent>
      )}
    </div>
  );
};

const PopoverComponent = ({
  children,
  showArrow,
  visible,
  onOuterClick,
  trigger,
  triggerNode,
  placement,
  className,
  style,
  closeOnClick,
}) => {
  return (
    <Container>
      <Popover
        visible={visible}
        onOuterClick={onOuterClick}
        triggerNode={<TriggerCover>{triggerNode}</TriggerCover>}
        trigger={trigger}
        showArrow={showArrow}
        placement={placement}
        className={className}
        style={style}
        closeOnClick={closeOnClick}
      >
        {children}
      </Popover>
    </Container>
  );
};

PopoverComponent.propTypes = {
  children: node.isRequired,
  showArrow: bool,
  visible: bool,
  onOuterClick: func,
  trigger: string,
  triggerNode: node.isRequired,
  placement: string,
  className: string,
  style: shape({}),
  closeOnClick: func,
};

PopoverComponent.defaultProps = {
  showArrow: true,
  visible: false,
  onOuterClick: () => null,
  trigger: "hover",
  placement: "bottom",
  className: "",
  style: {},
  closeOnClick: undefined,
};

export default PopoverComponent;
