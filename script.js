const columns = [
    document.getElementById('digit-0'),
    document.getElementById('digit-1'),
    document.getElementById('digit-2'),
    document.getElementById('digit-3'),
    document.getElementById('digit-4')
  ];
  
  // Cria os dígitos em cada coluna
  columns.forEach((col, index) => {
    const digitsContainer = document.createElement('div');
    digitsContainer.className = 'digits';
    for (let i = 0; i < 10; i++) {
      const digitEl = document.createElement('div');
      digitEl.className = 'digit';
      digitEl.textContent = i;
      digitsContainer.appendChild(digitEl);
    }
    col.appendChild(digitsContainer);
  });
  
  let counter = 0;
  function updateCounter() {
    const str = counter.toString().padStart(5, '0');
    str.split('').forEach((num, idx) => {
      const container = columns[idx].firstChild;
      container.style.transform = `translateY(-${parseInt(num) * 100}px)`;
    });
    counter = (counter + 1) % 100000;
  }
  
  setInterval(updateCounter, 1000);
  updateCounter();
  