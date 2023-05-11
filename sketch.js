function setup() {
  //USTAWIENIE TŁA
  removeElements(); //usunięcie przycisków
  createCanvas(400, 400); //stworzenie tła
  background(220); //kolor tła
  //PRZYCISK 1 - Graj
  button = createButton("Graj"); //stworzenie przycisku
  button.size(100, 50); //ustawienie rozmiaru przycisku
  button.position(0, 0); //pozycja przycisku
  button.mousePressed(gra);
  //PRZYCIKSK 2 - Tryb dla jednej osoby:
  button = createButton("Tryb solo");
  button.size(100, 50);
  button.position(100, 0);
  button.mousePressed(solo);
  //PRZYCISK 3 - Tryb dla dwóch osób:
  button = createButton("Tryb duo");
  button.size(100, 50);
  button.position(200, 0);
  button.mousePressed(duo);
  //PRZYCISK 4 - Informacje (aktualizowane na bieżąco):
  button = createButton("Info");
  button.size(100, 50);
  button.position(300, 0);
  button.mousePressed(info);
  //PRZYCISK 5 - Ustawienia (WIP):
  //button = createButton("Ustawienia");
  //button.size(100, 25);
  //button.position(300, 25);
  //button.mousePressed(ustaw);
}

//ZMIENNE
let tryb = 0; //wszystko co jest związane z ustawieniem trybu
let ta; //potwierdzanie wyboru trybu
let wpisz = ""; //wpisany wyraz w rybie duo
let daw = 0;
let wyraz;
let dlugosc = 0;
let pos = 0;
let px = 20;
let py = 150;
let ile = 0;
let raz = 0;
let czy;
let numer = 1;
let no = "";
let end = 1;
let wygrana = 0;
let zostalo = 10;
let wykorzystane = [];
let zgoda = 0;
let blok = 0;
let liczba = 0;
let spacje = 0;
let wyr = [];
let duze = 0;
let kat=["gra komputerowa", "zwierzę", "marka auta", "producent smartfonów", "komunikator"];
let los = Math.floor(Math.random()*kat.length);
let wyrazy = [["csgo", "minecraft", "terraria", "roblox"], ["kot", "pies", "chomik", "koń", "gołąb", "ryba"], ["mercedes", "volkswagen", "bmw", "cadilac", "seat"], ["xiaomi", "samsung", "nothing", "realme", "lg", "nokia"], ["messenger", "whatsapp", "signal", "discord"]];
let cosf;
let rysunek = [[100, 375, 100, 225], [100, 225, 175, 225], [125, 225, 100, 250], [175, 225, 175, 250], [175, 263, 25], [175, 275, 175, 310], [175, 275, 190, 300], [175, 275, 160, 300], [175, 310, 190, 335], [175, 310, 160, 335]];
let fig;
let figura = 0;
let zos = 0;
let lic;
let il = 0;

function gra() {
  if(tryb==0)
  {
    alert("Wybierz tryb, aby zagrać!");
    return;
  }
  else
  {
    if(tryb==1)
    {
      ta = confirm("Wybrano tryb solo. Czy uruchomić grę?");
      if(ta==true)
      {
        tryb = 3;
        gra();
      }
      else
      {
        tryb = 1;
      }
    }
    else if(tryb==2)
    {
      ta = confirm("Wybrano tryb duo. Czy uruchomić grę?");
      if(ta==true)
      {
        tryb = 4;
        gra();
      }
      else
      {
        tryb = 2;
      }
    }
    else if(tryb==3)
    {
      tryb = 5;
      gra();
      tryb = 3;
      solo();
    }
    else if(tryb==4)
    {
      tryb = 5;
      gra();
      tryb = 4;
      duo();
    }
    else
    {
      removeElements();
      button = createButton("Wpisz literę");
      button.size(100, 50);
      button.position(0, 0);
      button.mousePressed(litera);
      button = createButton("Wpisz wyraz");
      button.size(100, 50);
      button.position(100, 0);
      button.mousePressed(wwyraz);
      button = createButton("Zresetuj grę");
      button.size(100, 50);
      button.position(200, 0);
      button.mousePressed(koniec);
      button = createButton("Info");
      button.size(100, 50);
      button.position(300, 0);
      button.mousePressed(info);
    }
  }
}

function solo()
{
  if(tryb==0 || tryb==2)
  {
    //Podmiana przycisków
    button = createButton("TRYB SOLO");
    button.size(100, 50);
    button.position(100, 0);
    button.mousePressed(solo);
    button = createButton("Tryb duo");
    button.size(100, 50);
    button.position(200, 0);
    button.mousePressed(duo);
    //Ustawienie trybu
    tryb = 1;
  }
  else if(tryb==3)
  {
    textAlign(CENTER, BASELINE);
    textSize(22);
    text(`Kategoria: ${kat[los]}.`,200,100);
    textSize(12);
    textAlign(LEFT);
    cosf = wyrazy[los];
    los = Math.floor(Math.random()*cosf.length);
    wyraz = cosf[los];
    for(let i of wyraz)
    {
      wyr.push(i);
    }
    for(let i of wyraz)
    {
      dlugosc ++;
      ile ++;
      textSize(20);
      if(isNaN(i))
      {
        if(i=="." || i=="," || i==" ")
        {
          text(i, (pos*px)+50, py);
          spacje ++;
          pos ++;
        }
        else
        {
          text("_", (pos*px)+50, py);
          pos ++;
        }
      }
      else
      {
        text(i, (pos*px)+50, py);
        spacje ++;
        pos ++;
      }
      if(pos>12)
      {
        if(i!=="," && i!=="." && i!==" ")
        {
          if(wyr[ile]!==" " && wyr[ile]!=="." && isNaN(i))
          {
            text("-", (pos*px)+50, py);
            py = py + 25;
            pos = 0;
          }
        }
        else
        {
          py = py + 25;
          pos = 0;
        }
      }
    }
  }
}

function duo()
{
  if(tryb==0 || tryb==1)
  {
    // alert("Funkcja niedostępna!");
    // return;
    button = createButton("Tryb solo");
    button.size(100, 50);
    button.position(100, 0);
    button.mousePressed(solo);
    button = createButton("TRYB DUO");
    button.size(100, 50);
    button.position(200, 0);
    button.mousePressed(duo);
    tryb = 2;
  }
  else if(tryb==4)
  {
      // if(zos==1)
      // {
      //   let lic = prompt("Wpisz liczbę żyć (jeśli nic nie wpiszesz nic się nie stanie):");
      //   if(isNaN(lic))
      //     {
      //       duo();
      //     }
      //     if(lic>0 && lic<11)
      //     {
      //       alert("ez");
      //     }
      //     else
      //     {
      //       if(lic)
      //       {
      //         zos = 1;
      //         alert("Niepoprawna liczba!");
      //         duo();
      //       }
      //     }
      // }
      // else
      // {
        wpisz = prompt("Wpisz wyraz:");
      if(wpisz=="")
      {
        alert("Wpisz wyraz!");
        duo();
        return;
      }
      if(!wpisz)
      {
        alert("Musisz wpisać wyraz!");
        duo();
        return;
      }
      if(isNaN(wpisz))
      {
      for(let o of wpisz)
      {
        il ++;
        if(o==" ")
        {
          ile ++;
        }
        if(isNaN(o))
        {}
        else
        {
          ile ++;
        }
        if(o==o.toUpperCase())
        {
          ile ++;
        }
      }
      if(ile>0)
      {
        alert("Wyraz nie może zawierać liczb, dużych liter, znaków specjalnych i spacji!");
        ile = 0;
        duo();
        return;
      }
      else if(il>20)
      {
        alert("Za długi wyraz!");
        il = 0;
        duo();
        return;
      }
      else
      {
        let v = confirm("Czy chcesz ustawić niestandardową liczbę żyć (skala 1-10)? UWAGA Jeżeli to zrobisz szubienica nie będzie się rysowała (jest ona zaprojektowana na 10 szans).");
        if(v==true)
        {
          lic = prompt("Wpisz liczbę żyć od 1 do 10 (jeśli wpiszesz źle, zostanie ustawiona standardowa liczba żyć, czyli 10):");
          if(isNaN(lic))
          {
            // let as = confirm("Liczba nie została wpisana! Czy zresetować grę (jeśli klikniesz 'Anuluj' będziesz mógł wpisać liczbę jeszcze raz)?");
            // if(as==true)
            // {
            //   setup();
            //   return;
            // }
            // else
            // {
            //   zos = 0;
            //   // setup();
            // }
            alert("Wystąpił błąd! Ustawiono standardową liczbę żyć.");
          }
          else
          {
            if(lic>0 && lic<11)
            {
              zostalo = lic;
              zos = 1;
              alert("Liczba została ustawiona.");
            }
            else if(lic=="")
            {
              alert("Brak liczby! Gra ustawi standardową liczbę żyć (10).");
            }
            else
            {
              alert("Akcja anulowana! Ustawiono standardową liczbę żyć.");
            }
          }
          // if(lic>0 && lic<11)
          // {
          //   zos = 1;
          // }
          // else
          // {
          //   if(lic)
          //   {
          //     zos = 1;
          //     alert("Niepoprawna liczba!");
          //     duo();
          //   }
          // }
        }
        wyraz = wpisz;
        for(let i of wyraz)
            {
              if(i==" ")
              {
                spacje ++;
              }
              dlugosc ++;
              textSize(20);
              if(pos>12)
              {
                text("-", (pos*px)+50, py-1);
                py = py + 25;
                pos = 0;
              }
              if(i==" ")
              {
                text(" ", (pos*px)+50, py-1);
                pos ++;
              }
              else
              {
                text("_", (pos*px)+50, py-1);
                pos ++;
              }
            }
          }
    }
    else
    {
      if(wpisz)
      {
        alert("Wyraz nie może być liczbą!");
        duo();
        return;
      }
    }
  }
// }
        // wyraz = wpisz;
        // for(let i of wyraz)
        //     {
        //       if(i==" ")
        //       {
        //         spacje ++;
        //       }
        //       dlugosc ++;
        //       textSize(20);
        //       if(pos>12)
        //       {
        //         text("-", (pos*px)+50, py-1);
        //         py = py + 25;
        //         pos = 0;
        //       }
        //       if(i==" ")
        //       {
        //         text(" ", (pos*px)+50, py-1);
        //         pos ++;
        //       }
        //       else
        //       {
        //         text("_", (pos*px)+50, py-1);
        //         pos ++;
        //       }
        //     }
}