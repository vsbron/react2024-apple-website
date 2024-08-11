import { footerLinks } from "../constants";

function FooterNav() {
  return (
    <div className="flex">
      {footerLinks.map((link, i) => (
        <p key={link} className="font-semibold text-gray text-xs">
          {link}{" "}
          {i !== footerLinks.length - 1 && <span className="mx-2">| </span>}
        </p>
      ))}
    </div>
  );
}

export default FooterNav;
