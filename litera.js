function litera() //linijka 142 - automatyczne przejście do wpisania ostatniej szansy
{
  if(zgoda==dlugosc-spacje || wygrana==1)
  {
    alert("Wygrana!");
    return;
  }
  else if(end==0)
  {
    alert("Ostatnia szansa! Jeśli nie wiesz o co chodzi kliknij w przycisk 'Info'.");
    return;
  }
  else if(zostalo<1)
  {
    alert("Przegrana!");
    return;
  }
  let x = prompt(`Podaj literę ${numer} (pozostałe próby: ${zostalo}):`)
  if(!x)
  {
    if(x=="")
    {
      alert("Pole puste!");
      litera();
    }
  }
  if(x=="." || x==",")
  {
    alert("Przecinki i kropki nie są akceptowane!");
    litera();
    return;
  }
  if(isNaN(x))
  {
    ile = 0;
    for(let a of x)
    {
      ile ++;
    }
    if(ile<2)
    {
      ile = 0;
      blok = 0;
      if(x == x.toUpperCase())
      {
        duze = 1;
        x = x.toLowerCase();
      }
      else
      {
        duze = 0;
      }
      for(let p of wykorzystane)
      {
        ile ++;
        if(ile>0)
        {
          if(p==x)
          {
            alert("Litera została wykorzystana!");
            // blok = 1;
            litera();
            return;
          }
        }
      }
      if(blok==0)
      {
        if(x)
        {
          wykorzystane.push(x);
          pos = 0;
          px = 20;
          py = 150;
          ile = 0;
          for(let u of wyraz)
          {
            if(pos>12)
            {
              py = py + 25;
              pos = 0;
            }
            if(u==x)
            {
              x = x.toUpperCase();
              textSize(20);
              zgoda ++;
              text(x, (pos*px)+50, py-1);
              liczba ++;
              ile ++;
              blok = 2;
              x = x.toLowerCase();
            }
            else
            {
              if(blok!=2)
              {
                blok = 1;
              }
            }
            pos ++;
          }
          numer++;
          if(blok==1)
          {
            if(zos==0)
            {
              fig = rysunek[figura];
              strokeWeight(2);
              if(figura==4)
              {
                circle(fig[0], fig[1], fig[2]);
              }
              else
              {
                line(fig[0], fig[1], fig[2], fig[3]);
              }
              figura ++;
            }
            if(duze==0)
            {
              x = x.toLowerCase();
              alert(`Niestety, litera "${x}" nie pojawia się w haśle.`);
              // litera();
              // return;
            }
            else
            {
              x = x.toUpperCase();
              alert(`Niestety, litera "${x}" nie pojawia się w haśle.`);
              duze = 0;
              // litera();
              // return;
            }
            zostalo --;
            if(zostalo<1)
            {
              let b = confirm("To była twoja ostatnia próba. Czy chcesz wykorzystać ostatnią szansę? UWAGA Klikięcie 'Anuluj' spowoduje automatyczną przegraną!")
              if(b==true)
              {
                // end = 0;
                // wwyraz();
                alert("Aby wpisać hasło kliknij przycisk 'Wpisz wyraz'.");
                end = 0;
              }
              else
              {
                alert(`Przegrana! Poprawne hasło to: ${wyraz}.`);
                // end = 1;
                if(zos==0)
                {
                  noStroke();
                  fill(220);
                  square(50, 200, 300);
                  fill(255);
                  strokeWeight(2);
                  stroke(0);
                  line(100,375,100,225); //1. Pionowe Ramie
                  line(100,225,175,225); //2. Poziome Ramie
                  line(125,225,100,250); //3. Podpora
                  line(175,225,175,250); //4. Ramie na Głowę
                  circle(175,263,25);    //5. Głowa
                  line(175,275,175,310); //6. Ciało
                  line(175,275,185,305); //+życie Prawa Ręka
                  line(175,275,165,305); //+życie Lewa Ręka
                  line(175,310,185,340); //+życie Prawa Noga
                  line(175,310,165,340); //+życie Lewa Noga
                  strokeWeight(1);
                }
              }
            }
          }
          else
          {
            if(ile==1)
            {
              if(zgoda==dlugosc-spacje)
              {
                alert(`Brawo, litera "${x}" pojawia się w haśle. Wszystkie litery odgadnięte. Wygrana!`);
                wygrana = 1;
              }
              else
              {
                if(duze==1)
                {
                  x = x.toUpperCase();
                  alert(`Brawo, litera "${x}" pojawia się w tekście ${ile} raz!`);
                  duze = 0;
                }
                else
                {
                  x = x.toLowerCase();
                  alert(`Brawo, litera "${x}" pojawia się w tekście ${ile} raz!`);
                }
              }
            }
            else
            {
              if(zgoda==dlugosc)
              {
                alert("Gratulację! Hasło odgadnięte!");
                wygrana = 1;
              }
              else
              {
                if(duze==1)
                {
                  x = x.toLowerCase();
                  alert(`Brawo, litera "${x}" pojawia się w tekście ${ile} razy!`);
                }
                else
                {
                  alert(`Brawo, litera "${x}" pojawia się w tekście ${ile} razy!`);
              }
            }
          }
          }
          // if(zgoda==dlugosc)
          // {
          //   alert("Gratulację! Hasło odgadnięte!");
          //   wygrana = 1;
          // }
        }
      }
    }
    else
    {
      alert("Pole jest zbyt długie!");
      litera();
    }
  }
  else
  {
    if(x)
    {
      alert("W polu jest liczba lub spacja!");
      litera();
    }
  }
}