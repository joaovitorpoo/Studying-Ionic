import { Component, OnInit } from '@angular/core';

export interface viagen {
  local: String
  descricao: String
  data: String
  imagem: String
}

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens: viagen[] = [{local: "Sao Paulo", descricao: "São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.", data: "10/06/2020", imagem: "https://www.tegraincorporadora.com.br/CMS/posts/118/motivos-morar-em-sao-paulo.jpg"}
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
