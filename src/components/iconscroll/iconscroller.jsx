import AmazonSvg from "../../assets/icons/amazonsvg";
import AndroidSvg from "../../assets/icons/androidsvg";
import AppleSvg from "../../assets/icons/applesvg";
import Db2Svg from "../../assets/icons/db2svg";
import ExpoSvg from "../../assets/icons/exposvg";
import FacebookSvg from "../../assets/icons/facebooksvg";
import GooglePlaystoreSvg from "../../assets/icons/googleplaystoresvg";
import GoogleSvg from "../../assets/icons/googlesvg";
import IosSvg from "../../assets/icons/iossvg";
import MicrosoftSvg from "../../assets/icons/microsoftsvg";
import SwiftuiSvg from "../../assets/icons/swiftuisvg";
import VirtualStudioSvg from "../../assets/icons/virtualstudiosvg";

const icons = [
  AndroidSvg,
  AmazonSvg,
  AppleSvg,
  GooglePlaystoreSvg,
  Db2Svg,
  ExpoSvg,
  FacebookSvg,
  GoogleSvg,
  MicrosoftSvg,
  SwiftuiSvg,
  IosSvg,
  VirtualStudioSvg,
];

export default function IconScroller() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex w-max animate-scroll-x gap-20 hover:[animation-play-state:paused]">
        {[...icons, ...icons].map((Icon, idx) => (
          <Icon
            key={idx}
            className="h-10 w-10 hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
