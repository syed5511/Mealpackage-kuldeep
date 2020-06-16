import React from "react";
import { bool } from "prop-types";

import Popover from "./popover";
import Settings from "./settings";
import { Container, Link, Logo } from "./login_action.css";

const LoginAction = ({ isLogin }) => {
  let content = {
    img: {
      src: "/static/images/man-avatar.png",
      alt: "",
    },
    link: {
      href: "/sign-in",
      text: "Sign In",
    },
  };
  if (isLogin) {
    content = {
      img: {
        src: "/static/images/restaurant.png",
        alt: "",
      },
      text: "Hello Syed",
    };
  }

  const renderContent = () => (
    <Container>
      <Logo
        src={content.img.src}
        alt={content.img.alt}
        className={isLogin ? "loggedIn" : ""}
      />
      {isLogin ? (
        <Link as="div">{content.text}</Link>
      ) : (
        <Link href={content.link.href} className="link">
          {content.link.text}
        </Link>
      )}
    </Container>
  );

  return isLogin ? (
    <Popover triggerNode={renderContent()}>
      <Settings />
    </Popover>
  ) : (
    renderContent()
  );
};

LoginAction.propTypes = {
  isLogin: bool,
};

LoginAction.defaultProps = {
  isLogin: false,
};

export default LoginAction;
