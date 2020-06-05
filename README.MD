## Projeto criado como teste de competencia para GRGIT - Pokedex
 - Versão React: </br>
   - react - 16.11.0 </br>
   - react-native - 0.62.2 </br>
 
 - Utilizado </br>
   - React </br>
     - Classe Component </br>
     - Hooks </br>
     - Redux </br>
     - Axios </br>
   
 - Tarefa Listar todos os pokemons </br>
 - Acessar as seguintes informações de um pokemon: </Br>
    - HP </Br>
    - Ataque  </Br>
    - Defesa  </Br>
    - Velocidade Habilidades (abilities) </Br>
    - Pesquisar um pokemon pelo nome Paginação dos resultados  </Br></br></br>


 - <b>Após baixar do git </B> </Br>
    - yarn install </br>
    
  - Rodando a aplicacao:</br>
    - npx react-native run-ios

 - Para rebuildar a aplicacao caso esteja com problemas: </br>
   - watchman watch-del-all && rm -rf node_modules && yarn install && yarn start --reset-cache && rm -rf /tmp/metro-\* </br>

</br>
<b> Funcionamento aplicativo</b></br></br>
  - Aplicativo tem funcionamento simples, com apenas duas telas, usando um biblioteca para transição de uma para a outra chamada Router Flux, a primeira tela tem todas as ações praticamente, a busca é feita apos 3 caracteres serem digitados feito dessa maneira para ter uma performance melhor, não fazendo sentido buscar informações com apenas 1 ou 2 caracteres

</br></br>
-Observações ao programador

# se necessario criar theme

NativeBase 2.0 has been succesfully installed! │
│ Run `node node_modules/native-base/ejectTheme.js` to copy over theme config and variables. │
│ Head over to the docs for detailed information on how to make changes to the theme.

Libs extras

yarn add react-native-gesture-handler react-native-reanimated react-native-screens redux-thunk redux redux-logger react-native-router-flux react-redux lodash react-native-responsive-fontsize axios native-base react-native-vector-icons
