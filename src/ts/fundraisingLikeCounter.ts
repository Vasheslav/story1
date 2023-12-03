const likeButton: HTMLElement | null = document.querySelector('.fundraising_like-button');
const likeCount: HTMLElement | null = document.querySelector('.fundraising_like-count');

if (likeButton && likeCount) {
  likeButton.addEventListener('click', () => {
    const currentCount: number = parseInt(likeCount.textContent as string, 10);
    likeCount.textContent = (currentCount + 1).toString();
  });
}