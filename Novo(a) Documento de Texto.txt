<?php
/* Template Name: Landing Page FoundLaB */
get_header();
?>

<style>
/* 👇 Estilos básicos similares ao Canva */
body {
  font-family: 'Arimo', sans-serif;
  background: #ffffff;
  color: #304254;
  margin: 0;
}
section {
  padding: 80px 20px;
  text-align: center;
}
.cta-btn {
  display: inline-block;
  padding: 14px 28px;
  background: #304254;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
}
.cta-btn:hover {
  background: #1d2c3a;
}
</style>

<main>

  <!-- 🟦 Seção Hero -->
  <section class="hero" style="background: #eaf2f8;">
    <h1>FoundLa₿ - Fintech Inovadora</h1>
    <p>Revolucionando o sistema financeiro com soluções cripto para o mundo real.</p>
    <a href="#contato" class="cta-btn">Quero conhecer</a>
  </section>

  <!-- 🟪 Seção Sobre -->
  <section class="sobre">
    <h2>O que é a FoundLa₿?</h2>
    <p>Uma fintech que une o poder da tecnologia blockchain com a praticidade do dia a dia. Criamos soluções acessíveis, descentralizadas e escaláveis.</p>
  </section>

  <!-- 🟩 Seção Benefícios -->
  <section class="beneficios" style="background: #f5f7fa;">
    <h2>Por que escolher a FoundLa₿?</h2>
    <ul style="max-width: 700px; margin: 0 auto; text-align: left;">
      <li>✅ Transações rápidas e seguras com blockchain</li>
      <li>✅ Acesso a serviços financeiros sem burocracia</li>
      <li>✅ Plataforma intuitiva e mobile-friendly</li>
    </ul>
  </section>

  <!-- 🟧 Seção Contato -->
  <section id="contato">
    <h2>Fale com a gente</h2>
    <?php echo do_shortcode('[contact-form-7 id="123" title="Formulário de Contato"]'); ?>
  </section>

</main>

<?php get_footer(); ?>
