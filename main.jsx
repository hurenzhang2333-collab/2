import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Bot, BrainCircuit, FlaskConical, ShieldCheck, Workflow, MessageCircle } from "lucide-react";
import "./styles.css";

function App() {
  useEffect(() => {
    window.difyChatbotConfig = {
      token: "ufo2d2Cp1KV2qc2Y",
      inputs: {},
      systemVariables: {},
      userVariables: {}
    };

    const existing = document.getElementById("ufo2d2Cp1KV2qc2Y");
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://udify.app/embed.min.js";
      script.id = "ufo2d2Cp1KV2qc2Y";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const questions = [
    "我们这个 AI 制药项目的完整流程是什么？",
    "为什么选择 NiV-G 蛋白作为靶点？",
    "什么是 Cavity_5？为什么重要？",
    "什么是 Hit 分子？它和药物有什么区别？",
    "DrugCLIP 和 AutoDock Vina 有什么区别？",
    "ADMET 分析说明了什么？",
    "这个项目最大的局限性是什么？",
    "下一步需要什么实验验证？"
  ];

  const cards = [
    {
      icon: <Workflow />,
      title: "Project Workflow",
      text: "Target identification → virtual screening → docking → ADMET → molecular dynamics → validation plan."
    },
    {
      icon: <BrainCircuit />,
      title: "AI Drug Discovery",
      text: "The bot explains how AI tools help rank molecules, reduce screening cost, and support human decision-making."
    },
    {
      icon: <FlaskConical />,
      title: "Scientific Logic",
      text: "It connects NiV-G protein structure, Cavity_5, hit selection, docking interactions, ADMET, and MD stability."
    },
    {
      icon: <ShieldCheck />,
      title: "Limitations",
      text: "It reminds users that computational predictions are not final proof and still require wet-lab validation."
    }
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="heroText">
          <div className="badge"><Bot size={16}/> Interactive FAQ Website</div>
          <h1>尼帕病毒 AI 辅助药物发现项目助手</h1>
          <p>
            这是一个用于课堂展示的 AI 制药项目网站。点击右下角聊天按钮，即可询问关于
            Nipah virus、NiV-G protein、Cavity_5、Z9061820838、DrugCLIP、Vina、ADMET 和
            molecular dynamics 的问题。
          </p>
          <div className="heroButtons">
            <a href="https://udify.app/chatbot/ufo2d2Cp1KV2qc2Y" target="_blank" rel="noreferrer">
              直接打开 Chatbot
            </a>
            <span><MessageCircle size={16}/> 也可以点击右下角蓝色气泡</span>
          </div>
        </div>

        <div className="questionPanel">
          <h2>推荐提问</h2>
          <p>展示时可以复制这些问题到聊天机器人中。</p>
          <div className="questions">
            {questions.map((q, index) => <div className="question" key={index}>{q}</div>)}
          </div>
        </div>
      </section>

      <section className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      <section className="info">
        <h2>About This Website</h2>
        <p>
          这个网站使用 React + Vite 制作，嵌入 Dify chatbot 气泡组件。它不是单独的本地 HTML 展示页，
          可以部署到 Vercel、Netlify 或 GitHub Pages，生成一个真正可访问的网站链接。
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
