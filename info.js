function info()
{
  if(wygrana==1)
  {
    alert("Wygrana! Aby kontynuować rozgrywkę kliknij przyciks 'Zresetuj grę'.");
    return;
  }
  if(end==0)
  {
    alert("To jest ostatnia szansa. Kliknij przycisk 'Wpisz wyraz', aby wpisać wyraz po raz ostatni.");
    return;
  }
  if(zostalo<1)
  {
    alert("Przegrana! Aby kontynuować rozgrywkę kliknij przyciks 'Zresetuj grę'.");
    return;
  }
  if(tryb==0)
  {
    alert("Wybierz tryb, aby dowiedzieć się jak on działa!");
    return;
  }
  else if(tryb==1)
  {
    alert("W trybie solo hasło losuje się automatycznie, a Twoim zadaniem jest rozszyforwanie go.");
  }
  else if(tryb==2)
  {
    alert("W trybie duo na początku pierwsza osoba wpisuje hasło, aby druga mogła go rozszyfrować.");
  }
  else if(tryb==3)
  {
    alert(`W grze solo wpisujesz litery (przycisk 'Wpisz literę'), lub zgadujesz całe hasło (przycisk 'Wpisz wyraz'), które zostało wygenerowane automatycznie. Za każdym razem, gdy nie odgadniesz litery tracisz jedną szansę (pozostała liczba szans wynosi ${zostalo}).`)
  }
  else if(tryb==4)
  {
    if(zos==0)
    {
      alert(`W grze duo wpisujesz litery (przycisk 'Wpisz literę'), lub zgadujesz całe hasło (przycisk 'Wpisz wyraz'), które zostało wpisane przez drugą osobę. Za każdym razem, gdy nie odgadniesz litery tracisz jedną szansę (pozostała liczba szans wynosi ${zostalo}).`)
    }
    else
    {
      alert(`W grze duo wpisujesz litery (przycisk 'Wpisz literę'), lub zgadujesz całe hasło (przycisk 'Wpisz wyraz'), które zostało wpisane przez drugą osobę. Za każdym razem, gdy nie odgadniesz litery tracisz jedną szansę (w tym wypadku liczba szans została wpisana przez drugiego gracza, a wynosi ona ${zostalo}).`);
    }
  }
}