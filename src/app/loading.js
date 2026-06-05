const loading = () => {
    return (
        <div style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0f",
            zIndex: 9999,
            fontFamily: "'Sora', sans-serif",
            overflow: "hidden",
        }}>
            {/* Google Font Import */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap');

                @keyframes pulse-ring {
                    0% { transform: scale(0.6); opacity: 1; }
                    100% { transform: scale(2.2); opacity: 0; }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }

                @keyframes dot-bounce {
                    0%, 80%, 100% { transform: translateY(0); opacity: 0.3; }
                    40% { transform: translateY(-10px); opacity: 1; }
                }

                @keyframes fade-slide-up {
                    0% { opacity: 0; transform: translateY(16px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes shimmer {
                    0% { background-position: -400px 0; }
                    100% { background-position: 400px 0; }
                }

                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    50% { transform: translateY(-60px) translateX(20px); }
                }

                .loader-ring-outer {
                    animation: spin-slow 2.4s linear infinite;
                }

                .loader-ring-inner {
                    animation: spin-reverse 1.6s linear infinite;
                }

                .pulse-ring-1 {
                    animation: pulse-ring 2s ease-out infinite;
                }

                .pulse-ring-2 {
                    animation: pulse-ring 2s ease-out infinite 0.7s;
                }

                .dot-1 { animation: dot-bounce 1.4s ease-in-out infinite 0s; }
                .dot-2 { animation: dot-bounce 1.4s ease-in-out infinite 0.2s; }
                .dot-3 { animation: dot-bounce 1.4s ease-in-out infinite 0.4s; }

                .loading-text {
                    animation: fade-slide-up 0.8s ease forwards;
                }

                .shimmer-text {
                    background: linear-gradient(
                        90deg,
                        #5e6ad2 0%,
                        #a5b4fc 30%,
                        #e0e7ff 50%,
                        #a5b4fc 70%,
                        #5e6ad2 100%
                    );
                    background-size: 400px 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 2.5s linear infinite;
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #6366f1;
                    animation: float-particle linear infinite;
                }
            `}</style>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <span key={i} className="particle" style={{
                    left: `${10 + i * 12}%`,
                    top: `${60 + (i % 3) * 10}%`,
                    animationDuration: `${3 + i * 0.5}s`,
                    animationDelay: `${i * 0.4}s`,
                    opacity: 0,
                    width: i % 2 === 0 ? "3px" : "5px",
                    height: i % 2 === 0 ? "3px" : "5px",
                    background: i % 3 === 0 ? "#818cf8" : i % 3 === 1 ? "#6366f1" : "#c7d2fe",
                }} />
            ))}

            {/* Background radial glow */}
            <div style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Spinner container */}
            <div style={{ position: "relative", width: "96px", height: "96px", marginBottom: "36px" }}>

                {/* Pulse rings */}
                <div className="pulse-ring-1" style={{
                    position: "absolute",
                    inset: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(99,102,241,0.5)",
                }} />
                <div className="pulse-ring-2" style={{
                    position: "absolute",
                    inset: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(165,180,252,0.4)",
                }} />

                {/* Outer spinning ring */}
                <div className="loader-ring-outer" style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2.5px solid transparent",
                    borderTopColor: "#6366f1",
                    borderRightColor: "rgba(99,102,241,0.3)",
                    borderBottomColor: "transparent",
                    borderLeftColor: "rgba(99,102,241,0.1)",
                }} />

                {/* Inner spinning ring */}
                <div className="loader-ring-inner" style={{
                    position: "absolute",
                    inset: "16px",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                    borderTopColor: "#a5b4fc",
                    borderRightColor: "transparent",
                    borderBottomColor: "rgba(165,180,252,0.4)",
                    borderLeftColor: "transparent",
                }} />

                {/* Center dot */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #a5b4fc, #6366f1)",
                    boxShadow: "0 0 12px rgba(99,102,241,0.9)",
                }} />
            </div>

            {/* Text */}
            <div className="loading-text" style={{ textAlign: "center" }}>
                <p className="shimmer-text" style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    margin: "0 0 16px",
                }}>
                    Loading
                </p>

                {/* Dots */}
                <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "14px" }}>
                    <span className="dot-1" style={{
                        display: "inline-block", width: "6px", height: "6px",
                        borderRadius: "50%", background: "#6366f1",
                    }} />
                    <span className="dot-2" style={{
                        display: "inline-block", width: "6px", height: "6px",
                        borderRadius: "50%", background: "#818cf8",
                    }} />
                    <span className="dot-3" style={{
                        display: "inline-block", width: "6px", height: "6px",
                        borderRadius: "50%", background: "#a5b4fc",
                    }} />
                </div>
            </div>
        </div>
    );
};

export default loading;