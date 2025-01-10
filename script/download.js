// Funzione per gestire il download dei file PDF in base all'anno selezionato
function getPdf(event) {
  // Recupero l'anno selezionato dall'elemento <select>
  const selectedYear = event.target.value;

  // Percorso base per i file relativi all'anno selezionato
  const pathToFile = 'reports/' + selectedYear + '/';

  // Mappatura dei file disponibili
  const files = {
    '2023': ['Lavazza_BdS2023_ABSTRACT_ITA_digital_affiancate.pdf'], // File associato al 2023
    '2022': ['Lavazza_BS_2022_ITA.pdf'], // File associato al 2022
  };

  // Recupero i file disponibili per l'anno selezionato dalla mappatura
  const file = files[selectedYear] || []; // Se non ci sono file, ritorna un array vuoto

  // Recupero l'elemento HTML per i link PDF
  const mostraPdf = document.getElementById('mostraPdf');
  mostraPdf.innerHTML = ''; // Reset del contenitore per evitare duplicati

  // Gestione della visualizzazione del messaggio di avviso
  if (file.length === 0) {
    showAlert(); // Mostra il messaggio di avviso
    document.title = 'PW - Download non disponibile'; // Aggiorna il titolo della pagina
    return; // Termina l'esecuzione della funzione
  } else {
    hideAlert(); // Nasconde il messaggio di avviso
    document.title = 'PW - Download ' + selectedYear; // Aggiorna il titolo
  }

  // Creazione dinamica di un link per ciascun file disponibile
  file.forEach((f) => {
    const a = document.createElement('a');
    a.href = pathToFile + f;
    a.target = '_blank';
    a.innerText = f;
    a.download = f;
    a.classList.add('btn', 'btn-primary', 'd-block', 'mb-2'); // Classi Bootstrap per un bottone
    mostraPdf.appendChild(a);
  });
}

// Funzione per mostrare un messaggio di avviso
function showAlert() {
  const alertBox = document.getElementById('alert'); // Recupero l'elemento del messaggio di avviso
  alertBox.classList.remove('d-none'); // Rimuove la classe che nasconde l'alert
  alertBox.classList.add('d-block'); // Aggiunge la classe per mostrare l'alert
}

// Funzione per nascondere il messaggio di avviso
function hideAlert() {
  const alertBox = document.getElementById('alert');
  alertBox.classList.remove('d-block'); // Rimuove la classe di visualizzazione
  alertBox.classList.add('d-none'); // Nasconde l'alert
}

// Gestione degli anchor nella navbar per scorrere e evidenziare la sezione
document.querySelectorAll('.nav-link').forEach((link) => {
  //controllo che non sia il link di report.html
  if (link.href.includes('report.html')) {
    return;
  }
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.style.backgroundColor = '#e0f2f1'; // Colore evidenziato temporaneo
    setTimeout(() => {
      targetElement.style.backgroundColor = ''; // Ripristina il colore originale
    }, 2000);
  });
});
