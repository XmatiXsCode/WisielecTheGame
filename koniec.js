function koniec()
{
  if(end==0)
  {
     alert("Podczas ostatniej szansy nie można zresetować gry! Jeśli nie wiesz o co chodzi kliknij w przycisk 'Info'.");
  }
  else if(wygrana==1 || zostalo<1)
  {
    czy = confirm("Czy chcesz zresetować grę?");
    if(czy==true)
    {
      // alert("Gra zresetowana. Powrót do ekranu głównego...");
      rese();
    }
  }
  // else if(end==0)
  // {
  //   alert("Podczas ostatniej szansy nie można zresetować gry! Jeśli nie wiesz o co chodzi kliknij w przycisk 'Info'.");
  // }
  else
  {
    alert("Uwaga! Trwa gra! Jeśli nie chcesz resetować gry, kliknij przycisk 'Anuluj' w następnym okienku.");
    czy = confirm("Czy chcesz zresetować grę?");
    if(czy==true)
    {
      // alert("Gra zresetowana. Powrót do ekranu głównego...");
      rese();
    }
  }
}

function rese()
{
  tryb = 0;
  wpisz = "";
  daw = 0;
  dlugosc = 0;
  pos = 0;
  px = 20;
  py = 150;
  ile = 0;
  raz = 0;
  numer = 1;
  no = "";
  end = 1;
  wygrana = 0;
  zostalo = 10;
  wykorzystane = [];
  zgoda = 0;
  blok = 0;
  liczba = 0;
  spacje = 0;
  wyr = [];
  duze = 0;
  zos = 0;
  figura = 0;
  setup();
}