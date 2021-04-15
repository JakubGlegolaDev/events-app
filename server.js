const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const PORT = process.env.PORT || 3000
const api = require('./routes/api')
const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.use('/api', api)
app.get('/hello', function(req, res){
    res.send('Hello from NodeJS Server on Heroku with Angular')
})

app.get('/about', (req, res) => {
    let about = "Stack technologiczny:\n" +
        "- do przechowywania danych użyto MongoDb, \n" +
        "- Express Server do utworzenia REST API, \n" +
        "- Angular jako framework dla frontendu,\n" +
        "- NodeJS jako środowisko wykonawcze.\n" +
        "\n" +
        "Aplikacja wyświetla potencjalne wydarzenia w okolicy. Wydarzenia są dostępne tych którzy posiadają konto w systemie, oraz zwykłych użytkowników. \n" +
        "Jeśli użytkownik zaloguje się, zostanie przeniesiony na zakładkę Members, w której będzie miał dostęp do specjalnych wydarzeń. \n" +
        "Po wylogowaniu wracamy do strony ze zwykłymi wydarzeniami dla użytkowników niezalogowanych. \n" +
        "Aplikcja posiada system uwierzytelniania użytkownika, oraz możliwość rejestracji nowych kont oraz system logowania i wylogowywania.\n" +
        "\n" +
        "Do wyglądu interfejsu wspomogłem się najnowszą wersją frameworku bootstrap. W pliku app.component.html zawarłem układ strony polegający na umiejscowieniu baneru aplikacji na górze strony oraz dodaniu przycisku dla responsywności.\n" +
        "Następnie element navbar został podzielony na kilka części - dla każdej funkcjonalności: Events, Members, Login, Register, Logout. Pod każdą z opcji kryje się odwołanie do odpowiedniej funkcjonalności po stronie Backend-u(dyrektywa routerLink)\n" +
        "Dodatkowo dla 3 ostatnich opcji, zawsze sprawdzany jest stan czy użytkownik jest obecnie zalogowany poprzez funkcję \"_authService.loggedIn()\". Typ router-outlet pozwala na renderowanie klas \"container\".\n" +
        "Dla poszczególnych elementów - register, login, events, special-events konfiguracja UI znajduje się np. w register.component.html. Dla logowania oraz rejestracji są to proste formularze pozwalające wprowadzić użytkownikowi login oraz hasło i zatwierdzić dane guzikiem.\n" +
        "Dla pliku evets.component.html użyto lekkiego spaceingu na górze oraz podzielono tabelę tak by w rzędzie pojawiały się tylko 3 wydarzenia. Dodano także footer ktory prezentuję datę wydarzenia a formie skróconej.\n" +
        "\n" +
        "Dodatkowo wrzystkie dane zasilane są przez bazę mongoDb, do mechanizmu uwierzytelniania server generuje JWT token oraz przesyła go do aplikacji Angular, która przetrzymuje go w local storage.\n" +
        "Następnie aplikacja z każdym zapytaniem wysyła token, który walidowany jest przez server i jeśli token się zgadza - wysyłana jest zawartość \"specjalnych wydarzeń\".\n" +
        "\n" +
        "Być może aplikacja nie oferuje wiele pod względem wizualnym(zawodowo zajmuję się backendem...), a użyta technologia(Angular) nie jest ulubioną, ale wybrałem ją dlatego, że jest ona obecna w moim obecnej pracy, więc naturalnym dla mnie było to aby nieco się jej \"poduczyć\" przy okazji realizując ten projekt. "
    res.send(about)
})

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
})