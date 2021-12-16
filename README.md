
# Login social com firebase e react native 

O login social é um recurso que está presente em cerca de 80% dos aplicativos atualmente. É um recurso que traz facilidade para o usuário criar um cadastro em seu aplicativo e logar-se novamente utilizando uma de suas redes sociais!

Neste vídeo de pablo foi feito a integração do react native com o firebase, possibilitando fazer a integração com as redes sociais e salvar as credenciais diretamente no firebase, sem precisarmos de um banco de dados para isso.

## configurar um projeto com autenticação no firebase
- https://firebase.google.com/
## precisa criar um aplicativo na plataforma do facebook
### vais nos dar o id e o security secret. depois colocar a url de callbacck no login do facebook
- https://developers.facebook.com/apps/
## depois instalar algumas dependências
- https://github.com/eva-design/eva
- https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#eva-icons
- https://rnfirebase.io/
- https://www.npmjs.com/package/react-native-fbsdk-next
- https://github.com/react-native-google-signin/google-signin
- yarn add @react-native-firebase/app @react-native-firebase/auth
- yarn add react-native-fbsdk-next
- yarn add @react-native-google-signin/google-signin
- yarn add @eva-design/eva
- yarn add @ui-kitten/components @ui-kitten/eva-icons
## configurar o projeto com o arquivo  google-services.json do firebase
- salva esse arquivo dentro de android -> app
- depois em build.gradle na raiz da pasta android, adiciona classpath('com.google.gms:google-services:4.3.10') na propriedade dependencies.
- depois em build.gradle na past app, adiciona apply plugin: 'com.google.gms.google-services'
- depois no App.tsx importa dos serviços (GoogleSignin eSettings) do google e facebook respectivamente para inicializar na aplicação.
