import React, { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("fr");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const content = {
    fr: {
      heroTitle: "Transformez votre école en une référence digitale",
      heroDesc:
        "Sites web modernes, marketing digital et solutions complètes pour écoles privées en Tunisie",
      portfolio: "👨‍💻 Voir portfolio de développeur",
      contact: "Contactez-moi",
      button: "Contact",
      recommended: "⭐ Recommandé",
      freeConsult: "Consultation gratuite",
      guaranteed: "✓ Résultats garantis",
      monthly: "/mois",
      bestFor: "Idéal pour",
      startingAt: "À partir de",
      choosePlan: "Choisir cette offre"
    },
    ar: {
      heroTitle: "حوّل مدرستك إلى مرجع رقمي متميز",
      heroDesc:
        "مواقع إلكترونية حديثة، تسويق رقمي، وحلول متكاملة للمدارس الخاصة في تونس",
      portfolio: "👨‍💻 عرض ملف المطور",
      contact: "اتصل بي",
      button: "اتصال",
      recommended: "⭐ موصى به",
      freeConsult: "استشارة مجانية",
      guaranteed: "✓ نتائج مضمونة",
      monthly: "/شهر",
      bestFor: "مثالي لـ",
      startingAt: "ابتداءً من",
      choosePlan: "اختر هذه الباقة"
    },
  };

  const plans = [
    {
      id: 1,
      name: lang === "fr" ? "Pack Visibilité Plus" : "باقة تعزيز الظهور",
      price: "500",
      currency: "DT",
      duration: "3",
      popular: false,
      icon: "🚀",
      color: "#3B82F6",
      features: [
        lang === "fr"
          ? "Site web vitrine avec localisation & contact"
          : "موقع تعريفي مع تحديد الموقع واتصال",
        lang === "fr"
          ? "Galerie photos & vidéos"
          : "معرض صور وفيديوهات",
        lang === "fr"
          ? "Gestion Facebook + campagnes sponsorisées"
          : "إدارة فيسبوك مع حملات إعلانية",
        lang === "fr"
          ? "+3000 abonnés (mix organique/sponsorisé)"
          : "+3000 متابع (مزيج عضوي وإعلاني)",
        lang === "fr"
          ? "Optimisation mobile et SEO de base"
          : "تحسين محركات البحث وتجاوب مع الهواتف",
      ],
      bestFor: lang === "fr" 
        ? "Écoles en croissance" 
        : "المدارس في طور النمو",
      tag: lang === "fr" ? "Essentiel" : "أساسي"
    },
    {
      id: 2,
      name: lang === "fr" ? "Pack Croissance Digitale" : "باقة النمو الرقمي",
      price: "1000",
      currency: "DT",
      duration: "3",
      popular: false,
      icon: "📈",
      color: "#8B5CF6",
      features: [
        lang === "fr"
          ? "Site web professionnel responsive"
          : "موقع إلكتروني احترافي متجاوب",
        lang === "fr"
          ? "Inscription en ligne sécurisée"
          : "تسجيل إلكتروني آمن",
        lang === "fr"
          ? "Gestion des demandes et contacts"
          : "إدارة الطلبات والاتصالات",
        lang === "fr"
          ? "QR Codes pour bus et services scolaires"
          : "رموز QR للحافلات والخدمات المدرسية",
        lang === "fr"
          ? "Vidéo promotionnelle professionnelle"
          : "فيديو ترويجي احترافي",
        lang === "fr"
          ? "+5000 abonnés qualifiés (mix stratégique)"
          : "+5000 متابع مؤهل (مزيج استراتيجي)",
      ],
      bestFor: lang === "fr" 
        ? "Écoles en croissance" 
        : "المدارس في طور النمو",
      tag: lang === "fr" ? "Professionnel" : "احترافي"
    },
    {
      id: 3,
      name: lang === "fr" ? "Pack Écosystème Scolaire" : "باقة النظام المدرسي المتكامل",
      price: "3000",
      currency: "DT",
      duration: "3",
      popular: true,
      icon: "👑",
      color: "#10B981",
      features: [
        lang === "fr"
          ? "Application scolaire complète ( site web ) "
          : "تطبيق مدرسي متكامل (محمول ويب)",
        lang === "fr"
          ? "Dashboard administrateur avancé"
          : "لوحة تحكم متطورة للإدارة",
        lang === "fr"
          ? "Espaces parents, élèves, enseignants"
          : "مساحات للأولياء والتلاميذ والمعلمين",
        lang === "fr"
          ? "Système de notification"
          : "تواصل فوري",
           lang === "fr"
          ? "QR Codes pour bus et services scolaires"
          : "رموز QR للحافلات والخدمات المدرسية",
        lang === "fr"
          ? "Gestion Facebook complète "
          : "إدارة كاملة لفيسبوك مع 12 حملة",
        lang === "fr"
          ? "+5000 abonnés ciblés (audience qualifiée)"
          : "+5000 متابع مستهدف (جمهور مؤهل)",
      ],
      bestFor: lang === "fr" 
        ? "Écoles premium digitalisées" 
        : "المدارس الراقية الرقمية",
      tag: lang === "fr" ? "Premium" : "متميز"
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    scrollToContact();
  };

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* LANGUAGE SWITCH */}
      <div className="language-switch">
        <button 
          className={`lang-btn ${lang === "fr" ? "active" : ""}`} 
          onClick={() => setLang("fr")}
        >
          🇫🇷 FR
        </button>
        <button 
          className={`lang-btn ${lang === "ar" ? "active" : ""}`} 
          onClick={() => setLang("ar")}
        >
          🇹🇳 العربية
        </button>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="hero-badge">
          🎓 {lang === "fr" ? "Pour écoles privées" : " المدارس الخاصة"}
        </div>
        <h1>{content[lang].heroTitle}</h1>
        <p>{content[lang].heroDesc}</p>
      </header>

      {/* PRICING */}
      <section className="pricing">
        <div className="pricing-header">
          <h2>{lang === "fr" ? "Solutions Digitales Complètes" : "حلول رقمية متكاملة"}</h2>
          <p>{lang === "fr" 
            ? "Choisissez la formule adaptée à vos besoins" 
            : "اختر الباقة المناسبة لاحتياجاتك"}</p>
        </div>
        
        <div className="pricing-cards">
          
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card-wrapper">
              <div
                className={`card ${plan.popular ? "popular" : ""}`}
                style={{ 
                  borderTop: `4px solid ${plan.color}`,
                  transform: hoveredCard === plan.id ? 'translateY(-10px)' : 'none'
                }}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {plan.popular && (
                  
                  <div className="badge popular-badge ">
                    {content[lang].recommended}
                  </div>
                )}
                
                <div className="plan-tag" style={{ backgroundColor: `${plan.color}20` }}>
                  {plan.tag}
                </div>
                
                <h2>{plan.name}</h2>
                
                <div className="price-container">
                  <div className="price-main">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-currency">{plan.currency}</span>
                  </div>
                  <div className="price-duration">
                    {Math.round(plan.price / plan.duration)} {plan.currency} {content[lang].monthly}
                  </div>
                </div>

                <div className="plan-bestfor">
                  <strong>{content[lang].bestFor}:</strong> {plan.bestFor}
                </div>

                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="plan-extras">
                  <span>📞 {content[lang].freeConsult}</span>
                  <span>🛡️ {content[lang].guaranteed}</span>
                </div>
              </div>
              
              {/* BUTTON OUTSIDE THE CARD */}
              <button 
                className="plan-button-outer"
                style={{ 
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}CC)`
                }}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {content[lang].choosePlan}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>{content[lang].contact}</h2>
            
            {selectedPlan && (
              <div className="selected-plan-banner">
                <div className="banner-icon"></div>
                <div className="banner-content">
                  <h3>
                    {lang === "fr" ? "Pack sélectionné : " : "لقد اخترت: "}
                    <span style={{ color: plans.find(p => p.id === selectedPlan)?.color }}>
                      {plans.find(p => p.id === selectedPlan)?.name}
                    </span>
                  </h3>
                  <p>
                    {lang === "fr" 
                      ? "Discutons de votre projet pour cette offre !" 
                      : "دعنا نناقش مشروعك لهذه الباقة!"}
                  </p>
                </div>
              </div>
            )}
        
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">👤</div>
                <div>
                  <strong>Mohamed Firas Becehdli</strong>
                  <p>{lang === "fr" ? "Développeur Full-Stack & IT Manager" : "مطور Full-Stack ومدير تكنولوجيا المعلومات"}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>+216 27 078 786</strong>
                  <p>{lang === "fr" ? "Appel/WhatsApp" : "اتصال/واتساب"}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>firasbechli9@gmail.com</strong>
                  <p>{lang === "fr" ? "Réponse sous 24h" : "رد خلال 24 ساعة"}</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://wa.me/21627078786" target="_blank" rel="noreferrer" className="social-btn whatsapp">
                💬 WhatsApp
              </a>
              <a href="https://porfolio-topaz-delta.vercel.app/" target="_blank" rel="noreferrer" className="social-btn portfolio">
                💼 Portfolio
              </a>
            </div>
                <br/>
            <div className="portfolio-section">
              <p style={{ marginBottom: '15px', color: '#666' }}>
                {lang === "fr" 
                  ? "Découvrez mes réalisations et compétences techniques"
                  : "اكتشف إنجازاتي ومهاراتي التقنية"}
              </p>
              <a 
                href="https://porfolio-topaz-delta.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="portfolio-link"
              >
                🔗 {lang === "fr" ? "Voir mon portfolio complet" : "عرض ملفي الشخصي الكامل"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Mohamed Firas Becehdli - {lang === "fr" ? "Tous droits réservés" : "جميع الحقوق محفوظة"}
      </footer>
    </div>
  );
}

export default App;