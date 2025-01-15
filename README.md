# L-31 Project Work

Questo progetto è stato creato come parte del corso L-31.
La pagina web permette agli utenti di selezionare e scaricare i report di sostenibilità dell'azienda Lavazza per gli anni disponibili.
Questo repository ha come feature il fatto di utilizzare principalmente bootstrap per lo stile.

## Funzionalità

- **Navbar**: Contiene il logo di UniPegaso, utilizzato a scopo estetico e per navigare tramite link anchor nella pagina.
- **Selezione Anno**: Una combobox permette agli utenti di selezionare l'anno del report di sostenibilità che desiderano scaricare.
- **Download PDF**: In base all'anno selezionato, vengono mostrati i link per scaricare i file PDF disponibili.
- **Messaggio di Avviso**: Se il report per l'anno selezionato non è disponibile, viene mostrato un messaggio di avviso.
- **Stile Responsive**: La pagina è stilizzata per essere responsive e facile da navigare.
- **Effetti Hover**: Effetti hover per i div di descrizione per migliorare l'interattività.
- **Scroll e Evidenziazione**: Quando si clicca su un link della navbar, la pagina scorre fino alla sezione corrispondente e colora temporaneamente lo sfondo della sezione per evidenziarla.
- **Sezioni Informative**: Include sezioni come "Descrizione del progetto", "Descrizione dei report" e "Informazioni su Lavazza".
- **Hero Section**: Sezione grafica che ha una CTA anchor che riconduce alla descrizione del progetto
- **Statistiche**: Una sezione che mostra statistiche chiave su Lavazza in ottica sostenibilità.

## Struttura dei File

- **index.html**: Contiene la struttura HTML della pagina.
- **styles/style.css**: Contiene alcune personalizzazioni del codice.
- **script/download.js**: Contiene la logica JavaScript per gestire il download dei file PDF.
- **reports/**: Contiene i vari PDF da scaricare.

## Come Funziona

1. **Selezione Anno**: L'utente seleziona un anno dalla combobox.
2. **Gestione Evento**: La funzione `getPdf` viene chiamata al cambiamento della selezione.
3. **Verifica Disponibilità**: La funzione verifica se ci sono file PDF disponibili per l'anno selezionato.
4. **Mostra Link**: Se i file sono disponibili, vengono mostrati i link per il download. Altrimenti, viene mostrato un messaggio di avviso.
5. **Aggiornamento Titolo**: Il titolo della pagina viene aggiornato in base all'anno selezionato.
6. **Scroll e Evidenziazione**: Quando si clicca su un link della navbar, la pagina scorre fino alla sezione corrispondente e colora temporaneamente lo sfondo della sezione per evidenziarla.

## Sezioni della Pagina

- **Descrizione del Progetto**: Spiega lo scopo del progetto e le funzionalità principali.
- **Descrizione dei Report**: Fornisce informazioni generali sui report di sostenibilità.
- **Informazioni su Lavazza**: Fornisce una breve descrizione dell'azienda Lavazza.

## Autore

Questa pagina è stata creata da Denis Cazzulo, matricola 0312201729.

## Altre caratteristiche utili

La pagina è suddivisa in sezioni in modo tale da avere dati trasparenti
e descrizioni chiare per rispecchiare gli obiettivi del project Work.

Le fonti da cui si sono presi i dati sono messe nel footer insieme al mio numero di matricola
per essere disponibili alla consultazione.

Lo stile è stato rivisto più volte fino ad arrivare alla versione attuale con un user experience intuitiva e accattivante.

Altri dettagli generali sono stati condivisi nel pdf dell'elaborato del PW.

## Utilizzo di questo progetto

1. **Metodo 1: Live server**: Se si usa VSCode installare l'estensione di Live Server e procedere all'avvio della stessa cliccando CTRL + P ==> start live server. Generalmente sulla porta 3000 verrà avviato il progetto contenuto nella cartella e reperibile all'indirizzo [seguente](http://localhost:3000)

2. **Metodo 2: apertura da index.html**: Posizionarsi nella cartella del progetto dove si trova il file index.html e procedere con doppio click per aprire il file nel browser predefinito.

## requisiti speciali per questo repo

Questo repository necessita di una connessione ad internet per agganciare le librerie di bootstrap e funzionare correttamente
