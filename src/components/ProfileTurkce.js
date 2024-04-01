import React from "react";
import "./components.css";
import { ReactComponent as Rectangle39 } from "../svg/Rectangle 39.svg";

const ProfileTurkce = () => {
  return (
    <div className="profile">
      <h2>Profil</h2>
      <div className="açıklama">
        <div className="açıklama1">
          <h3 className="text-[#EA2678]">Kişisel Bilgiler</h3>
          <div className="column">
            <div className="column1">
              <p>Doğum Tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <br />
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="column2">
              <p>24.11.1990</p>
              <p>İstanbul</p>
              <p>
                Yıldız Teknik Üni. Mimarlık
                <br /> Lisans, 2012
              </p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="açıklama2">
          <div className="rectangle39">
            <Rectangle39 />
          </div>
          <h3>Kendi Hakkımda</h3>
          <p>
            Yaklaşık 12 yıllık mimarlık tecrübesinin ardından, yazılım alanına
            ilgi duymam sebebiyle sektör değişikliğine gittim. <br />
            <br />
            Mimarlık geçmişimle, kodlamanın hiyerarşik tasarım prensiplerini
            birleştirerek insan-makine etkileşimi için üretkenliği artırmayı
            hedefliyorum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTurkce;
