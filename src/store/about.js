export default {
  namespaced: true,
  state: () => ({ //data의 불변성을 위해 state를 함수로 만들어준다.
    name: 'BEOM',
    email: 'thesecon@gmail.com',
    blog: 'http://adbdef.com',
    phone: '+82-10-1234-5678',
    image: 'https://w.namu.la/s/9071d0575b6d14c0d6fc5832e26fe8ef0a298a1abb1d442cc3c865534ec5e949e8a2d195fe425ebb15f2f1f5b270e6b86979bd1e3fcb4e9d9432bdfbf4fb02a6295f350f4f979d0e3ba05f14d43e8f707f42242f6547b6d6f294317233aaf943'
  })
}