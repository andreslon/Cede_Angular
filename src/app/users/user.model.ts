export interface UserBaseModel {
  id: string;
  name: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
}
export interface UserFullModel extends UserBaseModel {
  //public List < ScopeFullDto > Scopes { get; set; }
  //public List < GrantTypeFullDto > GrantTypes { get; set; }
  //public List < SecretFullDto > Secrets { get; set; }  
}
