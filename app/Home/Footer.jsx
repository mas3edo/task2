"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";

import kidsImage from "../images/kids.jpg";

function TinyTalesLogo() {
  return (
    <svg
      width="66"
      height="51"
      viewBox="0 0 66 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M49.5875 22.3602C49.0476 20.4786 47.9975 19.0772 46.1981 18.3277C44.3717 17.5665 42.6468 17.8579 41.0003 18.8651C39.3358 14.9523 36.5287 12.8756 32.5635 12.5438C32.53 12.5724 32.4979 12.601 32.4658 12.6322C32.2498 12.8378 31.9966 12.968 31.7344 13.0278C31.5198 13.1488 31.2987 13.2607 31.0751 13.3648C31.0635 13.4117 31.0519 13.4572 31.0365 13.5028C31.2177 13.4559 31.4105 13.4325 31.6136 13.4195C31.737 13.4117 31.8591 13.4065 31.9825 13.4039C35.7163 13.3284 38.9939 15.707 40.2265 19.3856C40.4939 20.1832 40.6172 20.2223 41.2805 19.7252C41.2972 19.7135 41.3126 19.6992 41.3293 19.6875C43.7149 17.9191 47.0181 18.7259 48.3279 21.4142C48.5348 21.8371 48.6672 22.3003 48.7957 22.757C48.9859 23.4324 49.0605 23.4818 49.7443 23.2619C49.8278 23.2346 49.9127 23.2125 50.0052 23.189L50.2905 22.2535C50.0502 22.2899 49.824 22.325 49.5849 22.3615"
        fill="white"
      />
      <path
        d="M64.4945 30.6099C64.1732 28.7465 63.0704 27.565 61.2799 27.0914C60.6579 26.9274 59.9882 26.9495 59.262 26.878C58.4831 25.1044 57.1965 23.7199 55.3713 22.8715L55.1747 23.729C55.2274 23.7472 55.2685 23.7629 55.3071 23.7837C56.7466 24.5332 57.7723 25.6756 58.4407 27.159C58.7659 27.8799 58.7633 27.8812 59.5255 27.7992C59.627 27.7888 59.7286 27.7732 59.8314 27.7693C60.8802 27.7225 61.8159 28.0231 62.6013 28.7361C63.5999 29.6431 63.9611 31.1174 63.4971 32.3093C63.0306 33.5051 62.1822 34.0191 60.6617 34.0204C58.4908 34.023 56.3212 34.023 54.1516 34.023C53.9883 34.023 53.8238 34.0191 53.6606 34.0334C53.4228 34.0542 53.2531 34.2104 53.2853 34.4342C53.3058 34.5773 53.4704 34.7334 53.6079 34.8167C53.7171 34.8831 53.8868 34.8597 54.0282 34.8597C56.3418 34.8597 58.6553 34.8675 60.9689 34.8532C61.3532 34.8506 61.7504 34.8037 62.118 34.6931C63.722 34.2117 64.7991 32.3652 64.4958 30.6086"
        fill="white"
      />
      <path
        d="M59.6412 13.0863C59.546 13.0538 59.4407 13.0447 59.3404 13.0369C58.6052 12.9822 57.87 12.9354 57.1361 12.8782C56.7106 12.8469 56.2852 12.804 55.87 12.7662C55.5153 11.8567 55.1798 10.9888 54.8379 10.1248C54.7313 9.85542 54.6297 9.58086 54.4858 9.33233C54.2917 8.99531 53.9613 9.00312 53.766 9.34013C53.6529 9.53532 53.5783 9.75392 53.4935 9.96342C53.113 10.8977 52.7352 11.832 52.3496 12.7819C51.2776 12.8638 50.2378 12.9419 49.198 13.0226C49.0347 13.0356 48.8676 13.0356 48.7108 13.0759C48.261 13.1917 48.171 13.5118 48.4923 13.845C48.635 13.992 48.7982 14.1195 48.9563 14.2509C49.716 14.8781 50.4769 15.5027 51.2506 16.139C50.964 17.2086 50.6787 18.2652 50.401 19.3231C50.1658 20.2209 50.2378 20.3133 51.1555 20.2483C51.1298 20.3445 51.0951 20.4721 51.0552 20.6204C50.8162 21.5 50.3766 23.0992 50.3766 23.0992C50.3792 23.0992 50.383 23.0966 50.3856 23.0966C50.2841 23.4987 50.2108 23.8162 50.1234 24.1298C48.9486 28.3601 47.5322 32.507 45.9641 36.602C45.8973 36.7763 45.8073 36.9507 45.7957 37.1303C45.788 37.2461 45.8806 37.4465 45.968 37.4738C46.0926 37.5115 46.2932 37.466 46.3908 37.3775C46.5014 37.276 46.5399 37.0899 46.5991 36.9351C46.8548 36.2624 47.108 35.5883 47.3664 34.8987C48.6851 34.7673 49.9614 34.6397 51.2879 34.5083C51.2468 34.6996 51.2301 34.8193 51.1966 34.9312C50.9653 35.7041 50.7301 36.4758 50.4974 37.2487C50.4563 37.3866 50.3895 37.535 50.4087 37.6677C50.4254 37.7887 50.5257 37.9566 50.6247 37.9891C50.7236 38.0203 50.8997 37.9396 50.9833 37.8512C51.0745 37.7536 51.1067 37.5948 51.1529 37.4582C51.3277 36.9273 51.5013 36.3964 51.6683 35.8642C52.8714 32.0334 53.8572 28.1428 54.8431 24.2521C54.8585 24.1884 55.3225 22.0999 55.6451 20.6204C55.7634 20.0791 55.8623 19.6198 55.915 19.3699C56.3276 19.638 56.6824 19.8709 57.041 20.0986C57.2633 20.2392 57.4895 20.4369 57.762 20.2118C57.9998 20.0153 57.9086 19.7681 57.8404 19.5248C57.6245 18.7467 57.4137 17.9685 57.2042 17.1904C57.1078 16.8339 57.0217 16.476 56.9304 16.1117C57.7775 15.435 58.5949 14.7818 59.4124 14.1273C59.5563 14.0115 59.7119 13.9035 59.8327 13.7656C60.0666 13.4962 59.9805 13.2061 59.6424 13.0876"
        fill="white"
      />
      <path
        d="M10.5254 21.5456C10.6912 20.9353 10.8146 20.3484 11.0113 19.7863C12.1449 16.5541 15.3839 14.1052 19.0098 14.3928C21.4609 14.588 23.394 15.7473 24.8901 17.6927C24.9531 17.7733 25.0084 17.8618 25.0559 17.9529C25.1575 18.1442 25.1163 18.3198 24.9582 18.4552C24.7706 18.6165 24.5714 18.5827 24.4081 18.4187C24.2783 18.2886 24.1806 18.126 24.0649 17.9815C22.6228 16.1872 20.7488 15.2282 18.4764 15.1826C16.5831 15.1449 14.9778 15.9464 13.6218 17.2502C12.4097 18.4161 11.6796 19.8475 11.4534 21.5339C11.3378 22.3979 11.3326 22.3979 10.4843 22.4356C7.74658 22.5579 5.1708 24.7427 4.49087 27.5208C4.077 29.2137 4.19911 30.8506 4.99472 32.4147C5.11554 32.6528 5.26592 32.8779 5.41501 33.1004C5.83788 33.7315 6.33916 34.0516 7.18361 34.049C19.7746 34.0113 32.3655 34.0191 44.9565 34.0178C45.1197 34.0178 45.3074 33.9813 45.4398 34.049C45.5786 34.1206 45.7187 34.2845 45.7585 34.4341C45.8125 34.6358 45.666 34.7894 45.4578 34.8258C45.2971 34.8531 45.1313 34.8557 44.968 34.8557C37.5158 34.8583 30.0635 34.8596 22.6113 34.8596C17.3286 34.8596 12.0472 34.8479 6.7646 34.8688C6.13736 34.8714 5.67079 34.6801 5.2415 34.239C4.29807 33.2735 3.77881 32.0972 3.53074 30.792C2.92407 27.5923 4.37519 24.312 7.11934 22.6191C8.06405 22.0361 8.95735 21.7512 10.5241 21.5443"
        fill="white"
      />
    </svg>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center text-white/90 hover:text-white transition"
    >
      {children}
    </a>
  );
}

function ContactItem({ icon, children }) {
  return (
    <div className="flex items-center gap-3 text-[16px] font-medium text-white/70">
      <span className="inline-flex h-7 w-7 items-center justify-center">
        {icon}
      </span>
      <span className="leading-snug">{children}</span>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full">
      <div className="relative isolate w-full overflow-hidden">
        <Image
          src={kidsImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-14 lg:gap-20">
            <div className="md:col-span-1">
              <div className="max-w-xs">
                <div className="flex items-center gap-3">
                  <TinyTalesLogo />
                  <div className="text-base font-semibold leading-tight">
                    {t("brand.name")}
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-white/70 leading-relaxed">
                  {t("footer.description")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 md:contents">
              <div className="md:hidden">
                <h3 className="text-2xl font-semibold">
                  {t("footer.contactUs")}
                </h3>
                <div className="mt-6 space-y-4">
                  <ContactItem
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M6.6 10.8c1.4 2.7 3.7 5 6.4 6.4l2.1-2.1c.3-.3.7-.4 1.1-.2 1.2.4 2.6.7 4 .7.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.4.2 2.7.7 4 .1.4 0 .8-.2 1.1l-2.6 2.7z" />
                      </svg>
                    }
                  >
                    +87 01928491
                  </ContactItem>
                  <ContactItem
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                      </svg>
                    }
                  >
                    Named@gmail.com
                  </ContactItem>
                  <ContactItem
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    }
                  >
                    381, cairo, egypt
                  </ContactItem>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  {t("footer.letUsHelp")}
                </h3>
                <ul className="mt-4 space-y-2 text-[16px] font-medium text-white/70">
                  <li>{t("footer.helpLinks.myAccount")}</li>
                  <li>{t("footer.helpLinks.faqs")}</li>
                  <li>{t("footer.helpLinks.support")}</li>
                  <li>{t("footer.helpLinks.categories")}</li>
                  <li>{t("footer.helpLinks.allProducts")}</li>
                </ul>
              </div>
            </div>

            <div className="hidden md:block">
              <h3 className="text-2xl font-semibold">{t("footer.policies")}</h3>
              <ul className="mt-4 space-y-2 text-[16px] font-medium text-white/70">
                <li>{t("footer.policyLinks.refund")}</li>
                <li>{t("footer.policyLinks.about")}</li>
                <li>{t("footer.policyLinks.cancellation")}</li>
                <li>{t("footer.policyLinks.terms")}</li>
                <li>{t("footer.policyLinks.privacy")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold">
                {t("footer.sendEmail")}
              </h3>
              <div className="mt-4 w-full md:max-w-sm rounded-2xl bg-white/95 p-1">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-2 py-2">
                  <input
                    type="email"
                    placeholder={t("footer.emailPlaceholder")}
                    className="w-full bg-transparent text-sm md:text-xs text-gray-800 placeholder:text-gray-400 outline-none"
                  />
                  <button className="rounded-xl bg-[#C08B84] px-5 py-3 w-32 text-sm md:text-xs font-semibold text-white">
                    {t("footer.send")}
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-[16px] font-medium">
                  {t("footer.followUs")}
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <SocialIcon href="#" label="Facebook">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M13.5 22v-8h2.8l.4-3h-3.2V9.1c0-.9.2-1.5 1.5-1.5H17V5c-.4-.1-1.7-.2-3.2-.2-3.1 0-5.3 1.9-5.3 5.4V11H5.9v3h2.6v8h5z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="Twitter">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M21 7.2c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1-1.5-1.6-4.3-.7-4.7 1.4-.1.4-.1.8 0 1.2-3.2-.2-6-1.7-7.9-4.2-1 1.8-.5 4 1.2 5.2-.6 0-1.1-.2-1.6-.4 0 1.9 1.3 3.6 3.2 4-.5.1-1 .2-1.6.1.5 1.6 2 2.8 3.8 2.8-1.7 1.3-3.9 2-6.1 1.7 1.8 1.2 4 1.9 6.4 1.9 7.6 0 11.9-6.4 11.6-12.1.8-.6 1.4-1.2 1.9-2z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="Instagram">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
                      <path d="M12 7.3A4.7 4.7 0 1 1 12 16.7 4.7 4.7 0 0 1 12 7.3zm0 2A2.7 2.7 0 1 0 12 14.7 2.7 2.7 0 0 0 12 9.3z" />
                      <path d="M17.2 6.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="LinkedIn">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M6.5 9H3.7v12h2.8V9zM5.1 3.9a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM21 14.1c0-3.1-1.7-5.1-4.4-5.1-1.7 0-2.8.9-3.2 1.6V9H10.7v12h2.8v-6.4c0-1.7.3-3.4 2.4-3.4 2.1 0 2.1 1.9 2.1 3.5V21H21v-6.9z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="WhatsApp">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M20.5 12a8.5 8.5 0 0 1-12.9 7.3L3.5 20.5l1.3-4.0A8.5 8.5 0 1 1 20.5 12zm-8.5-7a7 7 0 0 0-6.0 10.6l.2.3-.8 2.4 2.4-.8.3.2A7 7 0 1 0 12 5zm4 10.1c-.2.6-1.0 1.1-1.7 1.2-.5.1-1.1.2-2.5-.4-1.7-.7-3.1-2.4-3.5-3.0-.4-.6-1.1-1.5-1.1-2.5 0-1.0.5-1.6.7-1.8.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.4l.6.9c.1.3.1.4-.9.6-.9.9-.9.9-.9.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.9-.8z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="Telegram">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M21.7 4.3c-.2-.2-.6-.3-1-.2L3.4 10.7c-.5.2-.8.6-.8 1 0 .4.3.8.8 1l4.7 1.7 1.8 5.6c.1.3.4.6.7.6.3 0 .6-.1.8-.3l2.7-2.7 4.7 3.5c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.1.5-.4.6-.7l3.1-15.8c.1-.4 0-.8-.3-1.1zM9.2 13.8l9.7-6.2-8.0 7.9-.3 3.0-1.2-3.8-3.1-1.1 12.9-5.0-10.0 6.4z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
