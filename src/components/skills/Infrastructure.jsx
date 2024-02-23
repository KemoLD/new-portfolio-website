import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Infrastructure = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Cloud and Infrastructure</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              title="Amazon Web Services"
              alt="Amazon Web Services"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">AWS</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              title="Docker"
              alt="Docker"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Docker</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
              title="Google Cloud"
              alt="Google Cloud"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Google Cloud</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
              title="firebase"
              alt="firebase"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
              title="Kubernetes"
              alt="Kubernetes"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Kubernetes</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              title="Git"
              alt="Git"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
