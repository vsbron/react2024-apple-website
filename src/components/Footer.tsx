import Copyright from "../ui/Copyright";
import FooterNav from "../ui/FooterNav";

function Footer() {
  // Returned JSX
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: <br className="hidden max-[400px]:inline" />
            <span className="underline text-blue">
              Find an Apple Store
            </span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you.
          </p>

          <p className="font-semibold text-gray text-xs">
            Or call (800) MY-APPLE (
            <a href="tel:8006927753" className="underline text-blue">
              800-692-7753
            </a>
            )
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between font-semibold text-gray text-xs">
          <div>
            <FooterNav />
            <p>Copyright &copy; 2024 Apple Inc. All rights reserved</p>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
