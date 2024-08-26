document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector(".wrapper");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector('.yes-btn');
  const heartContainer = document.querySelector('.heart-container');

  let heartsCreated = false;
  let yesPressedCount = 0;
  let noHoverCount = 0;

  function noBtnHover() {
    noHoverCount++;
    if (noHoverCount === 5) {
      noBtn.textContent = "Stop it!!!";
      yesBtn.textContent = "I say yes";
    } else if (noHoverCount === 10) {
      const noBtnRect = noBtn.getBoundingClientRect();
      const yesBtnRect = yesBtn.getBoundingClientRect();

      const noBtnPos = { left: noBtnRect.left, top: noBtnRect.top };
      const yesBtnPos = { left: yesBtnRect.left, top: yesBtnRect.top };

      noBtn.style.left = `${yesBtnPos.left}px`;
      noBtn.style.top = `${yesBtnPos.top}px`;

      yesBtn.style.left = `${noBtnPos.left}px`;
      yesBtn.style.top = `${noBtnPos.top}px`;

      noBtn.textContent = "Catch me if you can!";
      yesBtn.textContent = "Of course yes";
    } else if (noHoverCount === 15) {
      yesBtn.style.transform = 'scale(2)';
      noBtn.style.transform = 'scale(0.5)';

      noBtn.textContent = "Okay, okay!";
      yesBtn.textContent = "Definitely yes";
    } else if (noHoverCount === 20) {
      yesBtn.style.transform = 'scale(5)';
      noBtn.style.transform = 'scale(0.25)';

      noBtn.textContent = "Okay, okay!";
      yesBtn.textContent = "Absolutely yes";
    } else if (noHoverCount === 25) {
      noBtn.style.display = 'none';
      yesBtn.style.transform = 'scale(10)';

      yesBtn.textContent = "YES!!!";
    }

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  }

  function createHeartFromButton(button) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 30 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.setProperty('--size', `${size}px`);

    const buttonRect = button.getBoundingClientRect();
    const heartX = buttonRect.left + (buttonRect.width / 2) - (size / 2);
    const heartY = buttonRect.top + (buttonRect.height / 2) - (size / 2);

    heart.style.left = `${heartX}px`;
    heart.style.bottom = `${window.innerHeight - heartY}px`;

    const translateX = Math.random() * 200 - 200;
    const translateY = Math.random() * -500 - 400;
    const duration = Math.random() * 2 + 3;

    heart.style.animation = `float ${duration}s ease-in-out infinite`;
    heart.style.setProperty('--translateX', `${translateX}px`);
    heart.style.setProperty('--translateY', `${translateY}px`);

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  noBtn.addEventListener("mouseover", noBtnHover);

  yesBtn.addEventListener('click', () => {
    yesBtn.style.transform = 'scale(1)';
    noBtn.style.transform = 'scale(1)';
    noBtn.style.display = 'block';

    noBtn.textContent = "No";
    yesBtn.textContent = "Yes";

    yesPressedCount++;
    if (heartsCreated) {
      if (yesPressedCount < 3) {
        yesBtn.textContent = "I love you too";
        question.innerHTML = "No, I love you";
        gif.style.width = gif.style.height = '100%';
        gif.src = "https://i.pinimg.com/originals/98/ed/29/98ed29a15944ee61c41c0e340f698b57.gif";
      } else {
        yesBtn.textContent = "Love you";
        noBtn.textContent = "Love you 3000";
        noBtn.classList.add("yes-btn");
        noBtn.classList.remove("no-btn");
        noBtn.removeEventListener("mouseover", noBtnHover);
        noBtn.addEventListener("click", createHeartFromButton);
        question.innerHTML = "Aaaaaaaa, I love you very much";
        gif.style.width = gif.style.height = '80%';
        gif.src = "https://i.pinimg.com/originals/89/35/50/89355081a213ca3f622b0b39b94e9016.gif";
      }
      return;
    };

    yesBtn.textContent = "Really?";
    question.innerHTML = "Aaaaa, I like you too";
    gif.src = "https://i.pinimg.com/originals/a7/1c/45/a71c452c6fd2e1bf2768d4bea583b146.gif";
    gif.style.width = gif.style.height = '140%';

    heartsCreated = true;
    heartContainer.style.display = 'block';

    yesBtn.classList.add('clicked');

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      const size = Math.random() * 30 + 20;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;

      heart.style.setProperty('--size', `${size}px`);

      heart.style.left = `${Math.random() * 100}%`;

      const bottom = Math.random() * 100;
      heart.style.bottom = `${bottom}px`;

      const translateX = Math.random() * 200 - 200;
      const translateY = Math.random() * -500 - 400;
      const duration = Math.random() * 2 + 3;

      heart.style.animation = `float ${duration}s ease-in-out infinite`;
      heart.style.setProperty('--translateX', `${translateX}px`);
      heart.style.setProperty('--translateY', `${translateY}px`);

      heartContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }

    setInterval(createHeart, 500);
  });
});