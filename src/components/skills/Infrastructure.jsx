import React from "react";

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
              className="skills__icon"
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
              className="skills__icon"
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
              className="skills__icon"
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
              className="skills__icon"
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
              className="skills__icon"
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
              className="skills__icon"
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
