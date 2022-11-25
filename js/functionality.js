import { 
  menuIconMobile, menuLinks, openMenu, closeMenu 
} from './java.js';

import { createModal, projects } from './popupwindow.js';

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});



  const closeModal = () => {
    modal.classList.remove('active');
    backgroundModal.classList.remove('active');
  };

  buttonsProject.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id === "0") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      } else if (button.id === '1') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      } else if (button.id === '2') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      } else if (button.id === '3') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      }
    });
  });

  closeIcon.addEventListener('click', closeModal);
});
