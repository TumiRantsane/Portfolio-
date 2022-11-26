import {
  menuIconMobile, menuLinks, openMenu, closeMenu,
} from './java.js';

import { createModal, projects } from './popupwindow.js';

import {
  isItUppercase, email, form, error,
} from './validation.js';

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

document.addEventListener('DOMContentLoaded', () => {
  createModal();

  const buttonsProject = document.querySelectorAll('.works__card button');
  const closeIcon = document.querySelector('.closeModal');
  const modal = document.querySelector('.modal');
  const backgroundModal = document.querySelector('.overlay');
  const projectName = document.querySelector('.project-name');
  const projectFeature = document.querySelector('.project-feature');
  const projectBack = document.querySelector('.project-background');
  const projectYear = document.querySelector('.project-year');
  const projectImage = document.querySelector('.project-image');
  const projectDescription = document.querySelector('.project-description');
  const projectTool1 = document.querySelector('.project-tool1');
  const projectTool2 = document.querySelector('.project-tool2');
  const projectTool3 = document.querySelector('.project-tool3');
  const projectLinkLive = document.querySelector('.project-linkLive');
  const projectLinkSource = document.querySelector('.project-linkSource');

  const closeModal = () => {
    modal.classList.remove('active');
    backgroundModal.classList.remove('active');
  };

  buttonsProject.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id === '0') {
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
        projectImage.setAttribute('src', `${projects[button.id].image}`);
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

form.addEventListener('submit', (e) => {
  if (isItUppercase(email.value)) {
    error.textContent = '';
    email.style.border = '1px solid #cfd8dc';
  } else {
    e.preventDefault();
    email.style.border = '3px solid red';
    error.textContent = 'X   Email should be in lowercase';
  }
});