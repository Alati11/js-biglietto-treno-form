### Calcolo del prezzo del biglietto del treno

- chiedo di inserire il nome e il cognome
    - seleziono l'elemento input tramite ID
    - recupero il valore presente nell'input e lo salvo in una variabile
- chiedo di inserire il numero di km da percorrere
    - seleziono l'elemento input tramite ID
    - recupero il valore presente nell'input e lo salvo in una variabile
    
- calcolare il prezzo il prezzo totale del viaggio
    - calcolare prezzo base (0.21 € al km)
        - moltiplicare il prezzo al km per i km da percorrere
- Se l'utente è minorenne         
        - sottrarre il 20% dal prezzo base
 Se L'utente è over 65
        - sottraggo il 40% dal prezzo base 
- stampare il prezzo finale  
    - arrotondare a 2 cifre decimali
    - Modificare l'innerHTML dello span con il prezzo finale del biglietto    