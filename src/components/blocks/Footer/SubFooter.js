import React from "react";
import { SubFooterStyle } from "../../styles/FooterStyles/Footer.Styled";
import { GiNestedHearts } from "react-icons/gi";

const SubFooter = () => {
  return (
    <SubFooterStyle>
      <p>
        Crafted lovingly
        <span className="icon">
          <GiNestedHearts />
        </span>
        from DEVELOPER
      </p>
    </SubFooterStyle>
  );
};

export default SubFooter;
