# WentTeam - Strona Główna

## Opis projektu

WentTeam to nowoczesna strona internetowa zaprojektowana jako jednostronicowa aplikacja (SPA), oferująca przegląd usług HVAC, informacji o firmie oraz bloga z poradami i aktualnościami. Strona została zoptymalizowana pod kątem responsywności, z myślą o użytkownikach na różnych urządzeniach.

## Funkcje

- **Kinetic Typography w Sekcji Hero**: Dynamicznie animowany tekst w sekcji Hero, który teraz płynnie zmienia szerokość liter, tworząc efekt dynamicznego ruchu.
- **Obracające się Logo z Efektem Hover i Kliknięcia**: Logo obraca się podczas przewijania strony, a po kliknięciu wywołuje rozwijanie menu nawigacyjnego.
- **Akordeon w Sekcji FAQ**: Sekcja FAQ zawiera teraz akordeon, który umożliwia użytkownikom rozwijanie i zwijanie pytań i odpowiedzi. Tylko jedno pytanie może być rozwinięte na raz.
- **Testimonial Slider**: Rotacja opinii klientów w sekcji "Opinie Klientów" co 5 sekund.
- **Stylowy Formularz Kontaktowy**: Formularz kontaktowy z zaokrąglonymi rogami i wyraźnym CTA.
- **Stylowy Footer**: Zaawansowany, responsywny footer z informacjami o firmie i linkami społecznościowymi.

## Struktura katalogów

Projekt jest zorganizowany w następujący sposób:

- **public/**: Zawiera pliki statyczne (CSS, JS, obrazy, czcionki).
  - **css/**: Pliki stylów CSS.
  - **js/**: Skrypty JavaScript, w tym obsługa rotacji logo, akordeon w FAQ oraz slider opinii klientów.
  - **images/**: Obrazy używane na stronie.
  - **fonts/**: Czcionki używane na stronie.
  
- **views/**: Zawiera pliki szablonów (EJS).
  - **partials/**: Zawiera części wspólne strony, takie jak nagłówek (`header.ejs`) i stopka (`footer.ejs`).
  - **blog/**: Zawiera widoki dla sekcji blogowej (`index.ejs` i `post.ejs`).
  - **admin/**: Zawiera widoki dla panelu administracyjnego (`newPost.ejs`, `editPost.ejs`).
  - **auth/**: Zawiera widok logowania (`login.ejs`).
  
- **routes/**: Zawiera pliki obsługujące trasy (Express.js).
  - **index.js**: Trasa strony głównej.
  - **about.js**: Trasa strony "O Nas".
  - **services.js**: Trasa strony "Usługi".
  - **certificates.js**: Trasa strony "Certyfikaty".
  - **contact.js**: Trasa strony "Kontakt".
  - **blog.js**: Trasa strony blogowej.
  - **admin.js**: Trasa panelu administracyjnego.
  - **auth.js**: Trasa autoryzacji użytkownika (logowanie i wylogowanie).
  
- **models/**: Zawiera modele danych (Sequelize).
  - **Post.js**: Model danych dla postów na blogu.
  
- **config.js**: Konfiguracja bazy danych (SQLite i Sequelize).

- **server.js**: Główny plik serwera, który uruchamia aplikację i konfiguruje trasy.

## Uruchamianie projektu

1. Sklonuj repozytorium:

    ```bash
    git clone https://github.com/TwojeRepo/wentteam.git
    ```

2. Zainstaluj wymagane zależności:

    ```bash
    npm install
    ```

3. Uruchom aplikację:

    ```bash
    node server.js
    ```

4. Otwórz przeglądarkę i przejdź do `http://localhost:3000`.

## Zmiany wprowadzone w projekcie

1. **Rotacja logo**:
   - Logo obraca się w zależności od przewijania strony, dodając dynamiczny efekt wizualny.

2. **Akordeon w sekcji FAQ**:
   - Dodano akordeon w sekcji FAQ, który umożliwia rozwijanie pytań i odpowiedzi. Tylko jedno pytanie może być rozwinięte na raz.

3. **Stylizacja i animacje**:
   - Przegląd i optymalizacja stylizacji w plikach CSS.
   - Dodano dynamiczne animacje do sekcji Hero oraz przycisku CTA.

## Autorzy

- Łukasz J (https://github.com/TwojProfil) - Główny developer

## Licencja

Projekt jest dostępny na licencji MIT. Więcej informacji można znaleźć w pliku `LICENSE`.
