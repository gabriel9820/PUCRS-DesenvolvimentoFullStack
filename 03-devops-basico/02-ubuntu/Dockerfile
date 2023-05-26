FROM ubuntu

# problema: em alguns casos o cache pode atrapalhar a criação da imagem, ex.: o apt update está em cache e alguma ferramenta foi adicionada recentemente ao repositório apt,
#           ao rodar o apt install da ferramenta ela não seria encontrada pois o repositório da imagem estaria desatualizado

#RUN apt update
#RUN apt install net-tools --yes
#RUN apt install vim --yes
#RUN apt install curl --yes

# solução: rodar todos os comandos no mesmo bloco RUN

RUN apt update && apt install net-tools --yes && apt install vim --yes && apt install curl --yes

# comando para criar a imagem: docker build -t gabriel9820/aula-ubuntu-curl:v1 -f .\Dockerfile .
# comando para enviar ao docker hub: docker push gabriel9820/aula-ubuntu-curl:v1
# comando para mudar o nome da tag: docker tag gabriel9820/aula-ubuntu-curl:v1 gabriel9820/aula-ubuntu-curl:latest

# tag = versão da imagem ("latest" = versão mais recente da imagem)
# nome imagem = namespace/nome-repositorio:tag