"use client"

import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from '@emailjs/browser';
import Rel from '@/components/Relevant';
import Image from 'next/image';
import Photo from '@/components/Photo';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial window width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [indication, setIndication] = useState('');
  const [dataLog, setDataLog] = useState('');
  const [dailyUse, setDailyUse] = useState('');
  const [growthExp, setGrowthExp] = useState('');
  const [challenge, setChallenge] = useState('');
  const [message, setMessage] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: firstName,
      company: company,
      email: email,
      phone: phone,
      position: position,
      indication: indication,
      data_log: dataLog,
      daily_use: dailyUse,
      growth_expectations: growthExp,
      challenge: challenge,
      message: message,
    }

    emailjs.send('service_7zrfvbs', 'template_32infng', templateParams, 'laOXi-GazBgL10oD_')
      .then((result) => {
        setSuccessMessageVisible(true);
        setFirstName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setPosition('');
        setIndication('');
        setDataLog('');
        setDailyUse('');
        setGrowthExp('');
        setChallenge('');
        setMessage('');
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <main className="flex flex-col">

      <header className="text-4xl text-primary font-bold text-center bg-accent p-12 mb-8">
        Inscrições Encerradas!
      </header>

      <div className="hidden md:inline-flex py-5 px-10 lg:py-10 lg:px-20 xl:hidden">
        <h1 className="text-4xl text-secondary font-bold leading-normal">
          Estamos em busca de uma empresas parceira para nosso projeto acadêmico!
        </h1>
      </div>

      <div className="flex h-[120vh] py-0 md:h-[60vh] xl:h-[100vh] md:pb-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center xl:mr-0 xl:ml-[10%]">

          <div className="text-xl flex-1 flex flex-col gap-12">
            <h2 className="md:hidden xl:inline-flex text-3xl text-secondary font-bold leading-normal">
              Estamos em busca de uma empresas parceira para nosso projeto acadêmico!
            </h2>
            <p className="md:w-[80%]">Estamos trabalhando em um Projeto Integrador (PI) para o <Rel>Centro Universitário FAM</Rel>, e em busca de uma empresa que precise de um <Rel>sistema de banco de dados</Rel> para organizar informações como pedidos, estoque, clientes ou outros dados relevantes para seu negócio.</p>
            <p className="md:w-[80%]">O objetivo é desenvolver essas soluções de forma <Rel>gratuita</Rel>, aplicando na prática os conhecimentos que estamos adquirindo ao longo do curso, <Rel>com o suporte dos nossos professores</Rel>.</p>
          </div>

          <div className="relative w-[500px] h-[500px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px] pb-[-10vh] z-1">
            <Image
              src={
                windowWidth < 768
                  ? "/assets/banner-projeto-intregrador-fam-mobile.webp"
                  : "/assets/banner-projeto-intregrador-fam.webp"
              }
              priority
              quality={100}
              alt="Projeto integrador FAM"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(min-widht: 500px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>

      <div className="h-full mt-[-20%] md:mt-0 container mx-auto h-[100vh]">
        <ul className="flex flex-col text-primary/80 xl:flex-row gap-12 xl:gap-6">
          <li className="flex-1 bg-secondary py-12 px-10 rounded-xl flex flex-col justify-start lg:items-start gap-10 z-50">
            <h3 className="text-2xl text-primary leading-normal">Desenvolvimento gratuito:</h3>
            <p>Implementaremos um sistema de banco de dados personalizado para atender às necessidades da sua empresa.</p>
          </li>
          <li className="flex-1 bg-secondary py-12 px-10 rounded-xl flex flex-col justify-start lg:items-start gap-10">
            <h3 className="text-2xl text-primary leading-normal">Soluções tecnológicas adicionais:</h3>
            <p>Conforme o curso avança, poderemos expandir o projeto com outras soluções tecnológicas, alinhadas às necessidades da sua empresa.</p>
          </li>
          <li className="flex-1 bg-secondary py-12 px-10 rounded-xl flex flex-col justify-start lg:items-start gap-10">
            <h3 className="text-2xl text-primary leading-normal">Colaboração contínua até final do curso:</h3>
            <p>Queremos manter uma parceria ativa até o final do curso (2026), com reuniões periódicas para alinhamento, feedbacks e ajustes, garantindo que o sistema atenda às suas expectativas.</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col lg:h-[80vh] xl:h-[110vh] lg:flex-row lg:px-20 lg:items-center">
        <div className="w-auto h-auto container flex flex-col md:flex-row py-8 mt-10 lg:flex-1">
          <Photo
            src={
              windowWidth < 960
                ? "/assets/buscamos-empresas-parceiras-projeto-intregrador-fam-mobile.webp"
                : "/assets/buscamos-empresas-parceiras-projeto-intregrador-fam.webp"
            }
            alt="Buscamos empresas parceiras para projeto intregrador fam"
          />
        </div>

        <div className="container text-center lg:text-left flex flex-col pt-10 lg:flex-1">
          <h2 className="text-3xl text-secondary font-bold mb-10">O que buscamos:</h2>
          <ul className="flex flex-col gap-8">
            <li>
              <Rel>Empresas de pequeno ou médio porte:</Rel><br /> Especialmente aquelas que estão começando e precisam de apoio na organização de seus dados.
            </li>
            <li>
              <Rel>Disposição para colaborar:</Rel><br /> Buscamos empresas dispostas a nos fornecer feedbacks regulares e a participar ativamente do processo de desenvolvimento.
            </li>
            <li>
              <Rel>Dúvidas?</Rel><br /> Entre em contato <a className="hover:text-accent cursor-pointer" href="https://wa.me/5511991007079/" aria-label="Entre em contato pelo WhatsApp">(11) 99100-7079</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:w-[100%] xl:order-none pt-20 xl:p-20">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-6 p-10 bg-secondary xl:rounded-xl"
        >
          <h2 className="text-4xl text-center text-accent">Participe da Seletiva</h2>
          <p className="text-xl text-primary pt-10">Como podemos contatar você:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              minLength="3"
              required
            />
            <Input
              type="text"
              placeholder="Empresa"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              minLength="3"
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              minLength="5"
              maxLength="50"
              required
            />
            <Input
              type="number"
              placeholder="WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              minLength="10"
              maxLength="18"
              required
            />
            <Input
              type="text"
              placeholder="Qual seu cargo na empresa?"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              minLength="3"
              maxLength="30"
              required
            />
            <Select
              onValueChange={(value) =>
                setIndication(value)}
              value={indication}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Como nos conheceu?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione</SelectLabel>
                  <SelectItem value="linkedin">Linkedin</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="indicação">Indicação</SelectItem>
                  <SelectItem value="outros">Outro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <p className="text-xl text-primary pt-10">Conte sobre seu projeto:</p>
          <div className="grid grid-cols-1 gap-6">
            <Input
              type="text"
              placeholder="Quais dados precisa armazenar?"
              value={dataLog}
              onChange={(e) => setDataLog(e.target.value)}
              minLength="10"
              maxLength="200"
              required
            />
            <Input
              type="text"
              placeholder="Qual a finalidade dos dados?"
              value={dailyUse}
              onChange={(e) => setDailyUse(e.target.value)}
              minLength="10"
              maxLength="200"
              required
            />
            <Input
              type="text"
              placeholder="Quais expectativas de crescimento?"
              value={growthExp}
              onChange={(e) => setGrowthExp(e.target.value)}
              minLength="10"
              maxLength="200"
              required
            />
            <Input
              type="text"
              placeholder="Principais dificuldades com dados?"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              minLength="10"
              maxLength="200"
              required
            />
          </div>
          <p className="text-xl text-primary pt-10">Descreva seu projeto:</p>
          <Textarea
            className="text-xl h-[200px]"
            placeholder="Descreva sua empresa ou projeto e forneça mais detalhes relevantes."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength="3"
            maxLength="500"
            required
          />
          <div
            className="flex flex-row justify-end text-primary items-center gap-[30px]"
          >
            <p className={successMessageVisible ? "text-md" : "hidden"}>Mensagem enviada com sucesso! Em breve estraremos em contato.</p>
            <Button
              disabled
              size="md"
              className="max-w-60 bg-accent/70 cursor-not-allowed"
            >
              Inscrições Encerradas
            </Button>
          </div>
        </form>
      </div>

      <footer className="text-center text-secondary font-bold leading-none hover:text-primary bg-accent/70 py-6 px-2">
        <a href='/termos-de-uso'>
          Ao se cadastrar você concorda com as disposições destes termos e condições de uso de dados.
        </a>
      </footer>

    </main>
  )
}

export default Home;