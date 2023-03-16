
		const items = document.querySelectorAll('.item');
		const modalOverlay = document.querySelector('.modal-overlay');
		const modal = document.querySelector('.modal');
		const modalClose = document.querySelector('.modal-close');

		items.forEach(item => {
			item.addEventListener('click', () => {
				modalOverlay.classList.add('active');
				modal.classList.add('active');
			});
		});

		modalOverlay.addEventListener('click', () => {
			modalOverlay.classList.remove('active');
			modal.classList.remove('active');
		});

		modalClose.addEventListener('click', () => {
			modalOverlay.classList.remove('active');
			modal.classList.remove('active');
		});
