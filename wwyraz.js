function wwyraz() //linijka 172 - automatyczne przejście do wpisania ostatniej szansy
{
  if(wygrana==1)
  {
    alert("Wygrana!");
    return;
  }
  else if(end==0)
  {
    let war = prompt("Wpisz wyraz (małymi literami):")
    if(war=="")
    {
      alert("Wpisz wyraz!");
      wwyraz();
      return;
    }
    else
    {
      if(war)
      {
        if(isNaN(war))
        {
          for(let c of war)
        {
          raz ++;
          if(isNaN(c))
          {}
          else
          {
            if(c!==" ")
            ile ++;
          }
          if(c==c.toUpperCase())
          {
            if(c!==" ")
            ile ++;
          }
        }
        if(ile>0)
        {
          alert("Nie może być dużych liter, znaków specjalnych ani liczb!");
          ile = 0;
          wwyraz();
          return;
        }
        else if(raz>0)
          {
            if(raz>dlugosc-spacje)
            {
              alert("Wpisany wyraz jest dłuższy od hasła!");
              raz = 0;
              wwyraz();
              return;
            }
            else if(raz<dlugosc)
            {
              alert("Wpisany wyraz jest krótszy od hasła!");
              raz = 0;
              wwyraz();
              return;
            }
          }
          if(war==wyraz)
            {
              alert("Brawo! Hasło odgadnięte!");
              pos = 0;
              px = 20;
              py = 150;
              for(let r of wyraz)
              {
               if(r==" ")
                {
                  text("", (pos*px)+50, py-1);
                }
                else
                {
                  r = r.toUpperCase();
                  text(r, (pos*px)+50, py-1);
                }
                if(pos>12)
                {
                    py = py + 25;
                    pos = 0;
                }
                pos ++;
              }
              wygrana = 1;
              return;
            }
            else
            {
              alert(`Przegrana! Poprawne hasło to: ${wyraz}.`);
              end = 1;
              if(zos==0)
              {
                noStroke();
                fill(220);
                square(50, 200, 300);
                fill(255);
                strokeWeight(2);
                stroke(0);
                line(100,375,100,225);
                line(100,225,175,225);
                line(125,225,100,250);
                line(175,225,175,250);
                circle(175,263,25);
                line(175,275,175,310);
                line(175,275,185,305);
                line(175,275,165,305);
                line(175,310,185,340);
                line(175,310,165,340);
                strokeWeight(1);
                end = 1;
              }
              return;
            }
        }
        else
        {
          alert("Liczba nie może być hasłem!");
          wwyraz();
          return;
        }
      }
      else
      {
        return;
      }
    }
  }
  else if(zostalo<1)
  {
    alert("Przegrana!");
    return;
  }
  else if(wygrana==0)
  {
    if(zostalo>0)
    {
      no = prompt(`Podaj cały wyraz (pozostałe próby: ${zostalo})`);
    }
    // no = prompt(`Podaj cały wyraz (pozostałe próby: ${zostalo})`);
    if(no=="")
    {
      alert("Puste pole!");
      wwyraz()
    }
    else
    {
      if(isNaN(no))
      {
        ile = 0;
        for(let c of no)
        {
          raz ++;
          if(isNaN(c))
          {}
          else
          {
            if(c!==" ")
            ile ++;
          }
          if(c==c.toUpperCase())
          {
            if(c!==" ")
            ile ++;
          }
        }
        if(ile>0)
        {
          alert("Nie może być dużych liter, znaków specjalnych ani liczb!");
          ile = 0;
          wwyraz();
        }
        else
        {
          if(raz==dlugosc)
          {
            raz = 0;
            if(no==wyraz)
            {
              alert("Gratulację! Hasło odgadnięte!");
              pos = 0;
              px = 20;
              py = 150;
              textSize(20);
              for(let u of wyraz)
              {
                if(u==" ")
                {
                  text("", (pos*px)+50, py-1);
                }
                else
                {
                  u = u.toUpperCase();
                  text(u, (pos*px)+50, py-1);
                }
                if(pos>12)
                {
                  py = py + 25;
                  pos = 0;
                }
                pos ++;
              }
              wygrana = 1;
              return;
            }
            else
            {
              alert("Niestety! Wpisany wyraz nie jest hasłem!");
              raz = 0;
              zostalo --;
              fig = rysunek[figura];
              strokeWeight(2);
              if(zos==0)
              {
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
              if(zostalo<1)
              {
                let b = confirm("To była twoja ostatnia próba. Czy chcesz wykorzystać ostatnią szansę? UWAGA Klikięcie 'Anuluj' spowoduje automatyczną przegraną!")
                if(b==true)
                {
                  end = 0;
                  // wwyraz();
                  alert("Aby wpisać hasło kliknij przycisk 'Wpisz wyraz'.");

                }
                else
                {
                  alert(`Przegrana! Poprawne hasło to: ${wyraz}. Teraz możesz zresetować grę klikając przycisk 'Zresetuj grę'.`);
                  if(zos==0)
                  {
                    noStroke();
                    fill(220);
                    square(50, 200, 300);
                    fill(255);
                    strokeWeight(2);
                    stroke(0);
                    line(100,375,100,225);
                    line(100,225,175,225);
                    line(125,225,100,250);
                    line(175,225,175,250);
                    circle(175,263,25);
                    line(175,275,175,310);
                    line(175,275,185,305);
                    line(175,275,165,305);
                    line(175,310,185,340);
                    line(175,310,165,340);
                    strokeWeight(1);
                    end = 1;
                  }
                  return;
                }
              }
            }
          }
          if(raz>0)
          {
            if(raz>dlugosc-spacje)
            {
              alert("Wpisany wyraz jest dłuższy od hasła!");
              raz = 0;
              wwyraz();
            }
            else if(raz<dlugosc)
            {
              alert("Wpisany wyraz jest krótszy od hasła!");
              raz = 0;
              wwyraz();
            }
          }
        }
      }
      else
      {
        if(no)
        {
          alert("Nie może być dużych liter ani liczb!");
          wwyraz();
        }
      }
    }
  }
}