import { Fragment } from "react";
import { footerLinks } from "../constants";

function FooterNav() {
  return (
    <div className="flex flex-wrap mb-1">
      {footerLinks.map((link, i) => (
        <Fragment key={i}>
          <a href="" className="text-gray-200 hover:text-gray">
            {link}
          </a>
          {i !== footerLinks.length - 1 && <span className="mx-2">|</span>}
        </Fragment>
      ))}
    </div>
  );
}

export default FooterNav;
