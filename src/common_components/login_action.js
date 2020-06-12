import React, { Fragment } from "react";
import { bool } from "prop-types";

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
  return (
    <Container>
      <Logo src={content.img.src} alt={content.img.alt} />
      {isLogin ? (
        <Link as="div">{content.text}</Link>
      ) : (
        <Link href={content.link.href} className="link">
          {content.link.text}
        </Link>
      )}
    </Container>
  );
};

LoginAction.propTypes = {
  isLogin: bool,
};

LoginAction.defaultProps = {
  isLogin: true,
};

export default LoginAction;
