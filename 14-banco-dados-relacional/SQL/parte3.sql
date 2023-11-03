CREATE TABLE MEDICOS 
( 
    CRM VARCHAR(20) NOT NULL, 
    NOME VARCHAR(100) NOT NULL, 
    ESPECIALIDADE VARCHAR(50) NOT NULL, 
 
    CONSTRAINT PK_MEDICOS PRIMARY KEY (CRM) 
);

CREATE TABLE PACIENTES 
( 
    CPF VARCHAR(14) NOT NULL, 
    NOME VARCHAR(100) NOT NULL, 
    SEXO CHAR(1) NOT NULL, 
 
    CONSTRAINT PK_PACIENTES PRIMARY KEY (CPF) 
);

CREATE TABLE MEDICOS_PACIENTES 
( 
    MEDICO_CRM VARCHAR(20) NOT NULL, 
    PACIENTE_CPF VARCHAR(14) NOT NULL, 
 
    CONSTRAINT FK_MEDICOS_PACIENTE_MEDICOS FOREIGN KEY (MEDICO_CRM) REFERENCES MEDICOS (CRM), 
    CONSTRAINT FK_MEDICOS_PACIENTE_PACIENTES FOREIGN KEY (PACIENTE_CPF) REFERENCES PACIENTES (CPF) 
);

ALTER TABLE MEDICOS_PACIENTES ADD CONSTRAINT PK_MEDICOS_PACIENTES PRIMARY KEY (MEDICO_CRM,PACIENTE_CPF);

CREATE TABLE CONSULTAS 
( 
crm VARCHAR(20) NOT NULL, 
cpf VARCHAR(14) NOT NULL, 
data date NOT NULL, 
diagnostico VARCHAR(500) NULL, 
CONSTRAINT FK_CONSCRM FOREIGN KEY (crm) REFERENCES medicos(crm), 
CONSTRAINT FK_CONSCPF FOREIGN KEY (cpf) REFERENCES pacientes(cpf), 
CONSTRAINT PK_CONS PRIMARY KEY (crm,data) 
);

CREATE TABLE AUTORES ( 
	COD_AUTOR NUMBER(5) NOT NULL, 
    NOME VARCHAR(200) NOT NULL, 
    DESCRICAO VARCHAR(1024), 
 
    CONSTRAINT PK_AUTORES PRIMARY KEY (COD_AUTOR) 
);

CREATE TABLE PRODUTOS ( 
    COD_PRODUTO NUMBER(5) NOT NULL, 
    TITULO VARCHAR(100) NOT NULL, 
    LANCAMENTO DATE NOT NULL, 
    IMPORTADO CHAR(1) DEFAULT 'N' NOT NULL, 
    PRECO NUMBER(10,2), 
    PRAZO_ENTREGA NUMBER(3) NOT NULL, 
 
    CONSTRAINT PK_PRODUTOS PRIMARY KEY (COD_PRODUTO), 
    CONSTRAINT CHECK_IMPORTADO CHECK(IMPORTADO IN ('S', 'N')) 
);

CREATE TABLE AUTORES_PRODUTOS ( 
    COD_AUTOR NUMBER(5) NOT NULL, 
    COD_PRODUTO NUMBER(5) NOT NULL, 
 
    CONSTRAINT FK_AUT FOREIGN KEY (COD_AUTOR) REFERENCES AUTORES (COD_AUTOR), 
    CONSTRAINT FK_PROD FOREIGN KEY (COD_PRODUTO) REFERENCES PRODUTOS (COD_PRODUTO), 
    CONSTRAINT PK_AUT_PROD PRIMARY KEY (COD_AUTOR, COD_PRODUTO) 
);

insert into autores values (1,'Sophia Angelides',null);

insert into autores values (2,'Mário Pedrosa',null);

insert into autores values (1002,'Otília Arantes',null);

insert into autores values (3,'Emílio F. Moran',null);

insert into autores values (4,'Jack R. Greene',null);

insert into produtos values (1,'A. P. TCHEKHOV: Cartas para uma Poética',to_date('29/12/1995','dd/mm/yyyy'),'S',296,43);

insert into produtos values (2,'ACADÊMICOS E MODERNOS - Textos Escolhidos 3',to_date('22/09/2002','dd/mm/yyyy'),'N',31,47);

insert into produtos values (3,'ADAPTABILIDADE HUMANA: Uma Introdução à Antropologia',to_date('17/01/1998','dd/mm/yyyy'),'N',400,42);

insert into produtos values (4,'ADMINISTRAÇÃO DO TRABALHO POLICIAL',to_date('25/08/2000','dd/mm/yyyy'),'N',265,26);

insert into produtos values (5,'ADOÇÃO INTERNACIONAL e o Tráfico de Crianças',to_date('16/11/1998','dd/mm/yyyy'),'N',49,51);

insert into autores values (5,'Antônio Chaves',null);

insert into autores values (6,'José Pedro de Oliveira Costa',null);

insert into autores values (7,'Ana Mae Barbosa',null);

insert into autores values (8,'Piero Comin-Chiaramonti',null);

insert into autores values (1008,'Celso Gomes',null);

insert into autores values (9,'Barão de Itararé',null);

insert into autores values (10,'Barão de Itararé',null);

insert into autores values (11,'Aziz Nacib AbSaber',null);

insert into autores values (12,'Maria L. Aragão',null);

insert into autores values (1012,'José Carlos S. Meihy ',null);

insert into autores values (13,'Eliane Garcindo Dayrell',null);

insert into autores values (1013,'Zilda Márcia Iokoi',null);

insert into autores values (14,'Maria Lígia Coelho Prado',null);

insert into autores values (15,'Tânia Maria Bessone',null);

insert into autores values (1015,'Tereza Aline Queiroz',null);

insert into autores values (16,'Dante Moreira Leite',null);

insert into autores values (17,'Nilza Nunes da Silva',null);

insert into autores values (18,'Ricardo Palma',null);

insert into autores values (19,'José Luiz Goldfarb',null);

insert into autores values (1019,'Márcia Ferraz',null);

insert into autores values (20,'Júlio César Rodrigues Pereira',null);

insert into autores_produtos values (1,1);

insert into produtos values (6,'AIURUOCA - MATUTU E PEDRA DO PAPAGAIO',to_date('19/08/1999','dd/mm/yyyy'),'N',326,41);

insert into produtos values (7,'ALEX FLEMMING',to_date('23/09/2001','dd/mm/yyyy'),'S',24,43);

insert into produtos values (8,'ALKALINE MAGMATISM IN CENTRAL-EASTERN PARAGUAY',to_date('20/08/1997','dd/mm/yyyy'),'N',143,45);

insert into produtos values (9,'ALMANHAQUE PARA 1955 1º SEMESTRE',to_date('16/05/1998','dd/mm/yyyy'),'S',179,27);

insert into produtos values (10,'ALMANHAQUE PARA 1949',to_date('20/06/2000','dd/mm/yyyy'),'N',86,21);

insert into autores_produtos values (2,2);

insert into autores_produtos values (1002,2);

insert into autores_produtos values (3,3);

insert into autores_produtos values (4,4);

insert into autores_produtos values (5,5);

insert into autores_produtos values (6,6);

insert into autores_produtos values (7,7);

insert into autores_produtos values (8,8);

insert into autores_produtos values (1008,8);

insert into autores_produtos values (9,9);

insert into autores_produtos values (10,10);

insert into autores_produtos values (11,1);

insert into autores_produtos values (12,2);

insert into autores_produtos values (1012,2);

insert into autores_produtos values (13,3);

insert into autores_produtos values (1013,3);

insert into autores_produtos values (14,4);

insert into autores_produtos values (15,5);

insert into autores_produtos values (1015,5);

insert into autores_produtos values (16,6);

insert into autores_produtos values (17,7);

insert into autores_produtos values (18,8);

SELECT AU.nome, PROD.titulo 
FROM AUTORES AU 
JOIN AUTORES_PRODUTOS AP 
ON (AU.cod_autor = AP.cod_autor) 
JOIN PRODUTOS PROD 
ON (AP.cod_produto = PROD.cod_produto);

SELECT AVG(preco) MEDIA FROM PRODUTOS;

SELECT AVG(NVL(preco,0)) MEDIA FROM PRODUTOS;

SELECT MAX(preco) FROM PRODUTOS;
