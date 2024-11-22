import React from 'react';
import { Coffee, Brain, Heart, Battery, Leaf, Clock } from 'lucide-react';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import CoffeeTypeCard from './components/CoffeeTypeCard';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
            alt="Türk kahvesi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-center">
            Kahve ve <span className="text-red-500">Sağlığınız</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl mb-8 text-neutral-300">
            Kahve tüketimi, etkileri ve bilinçli tüketim hakkında kapsamlı rehber
          </p>
          <a 
            href="#types"
            className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Daha Fazla Bilgi
          </a>
        </div>
      </div>

      {/* Coffee Types Section */}
      <section id="types" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Kahve Türleri ve Güvenli Tüketim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoffeeTypeCard 
              title="Türk Kahvesi"
              caffeine="50-65 mg/fincan"
              safeAmount="Günde 2-3 fincan"
              imageUrl="https://images.pexels.com/photos/29493286/pexels-photo-29493286/free-photo-of-aerial-view-of-turkish-coffee-in-traditional-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              risks={[
                "Mide asidinde artış",
                "Uykusuzluk (özellikle akşam tüketiminde)",
                "Diş minesinde lekelenme",
                "Yüksek tansiyona etkisi"
              ]}
            />
            <CoffeeTypeCard 
              title="Filtre Kahve"
              caffeine="90-140 mg/fincan"
              safeAmount="Günde 2 fincan"
              imageUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
              risks={[
                "Kolesterol seviyesinde artış",
                "Kalp çarpıntısı",
                "Anksiyete ve huzursuzluk",
                "Bağımlılık riski yüksek"
              ]}
            />
            <CoffeeTypeCard 
              title="Espresso"
              caffeine="60-80 mg/shot"
              safeAmount="Günde 2-3 shot"
              imageUrl="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80"
              risks={[
                "Yüksek asit içeriği",
                "Mide rahatsızlıkları",
                "Aşırı uyarılma",
                "Kan basıncında ani yükselme"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Health Risks Section */}
      <section id="risks" className="py-20 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Sağlık Riskleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard 
              Icon={Heart}
              title="Kardiyovasküler Etkiler"
              description="Yüksek tansiyon, kalp ritim bozuklukları ve kalp çarpıntısı riski"
            />
            <InfoCard 
              Icon={Brain}
              title="Zihinsel Sağlık"
              description="Anksiyete, uykusuzluk ve duygu durum değişiklikleri"
            />
            <InfoCard 
              Icon={Battery}
              title="Enerji Düşüşü"
              description="Kafein etkisi geçtiğinde yorgunluk ve konsantrasyon kaybı"
            />
          </div>
        </div>
      </section>

      {/* Addiction Effects Section */}
      <section id="addiction" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Bağımlılık Belirtileri</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-neutral-300">
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p>Giderek artan tüketim ihtiyacı</p>
              </div>
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p>Yoksunluk belirtileri (baş ağrısı, yorgunluk)</p>
              </div>
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p>Tüketimi azaltmada zorluk</p>
              </div>
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p>Olumsuz etkilere rağmen kullanmaya devam etme</p>
              </div>
            </div>
            <div className="bg-[url('https://img.freepik.com/free-photo/front-view-homeless-man-holding-cup-plastic-bag_23-2148760775.jpg?semt=ais_hybrid')] bg-cover bg-center rounded-lg min-h-[300px]"></div>
          </div>
        </div>
      </section>

      {/* Recovery Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Bağımlılıktan Kurtulmanın Faydaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard 
              Icon={Heart}
              title="Daha İyi Uyku"
              description="Daha kaliteli ve düzenli uyku düzeni"
            />
            <InfoCard 
              Icon={Brain}
              title="Dengeli Ruh Hali"
              description="Daha az anksiyete ve daha stabil duygu durumu"
            />
            <InfoCard 
              Icon={Battery}
              title="Doğal Enerji"
              description="Vücudun doğal enerji döngüsünün düzenlenmesi"
            />
          </div>
        </div>
      </section>

      {/* Recovery Process Section */}
      <section id="recovery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">İyileşme Süreci</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard 
              Icon={Leaf}
              title="Alternatif İçecekler"
              description="Yeşil çay, ıhlamur, adaçayı gibi kafeiniz alternatifler"
            />
            <InfoCard 
              Icon={Clock}
              title="Kademeli Azaltma"
              description="Tüketimi yavaş yavaş azaltarak yoksunluk belirtilerini minimize etme"
            />
            <InfoCard 
              Icon={Heart}
              title="Sağlıklı Yaşam"
              description="Düzenli egzersiz ve beslenme ile doğal enerji üretimi"
            />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-20 px-4 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Yardım Alın</h2>
          <p className="text-neutral-300 mb-8">
            Kafein bağımlılığından kurtulmak mümkün. Bir sağlık uzmanıyla görüşerek size özel bir plan oluşturabilirsiniz.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Coffee className="w-8 h-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold text-white">Kahve Bilinci</span>
          </div>
          <p className="mb-4">Bilinçli kahve tüketimi için rehberiniz</p>
          <p>&copy; 2024 Kahve Bilinci. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;