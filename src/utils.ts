export const inEffect = (height: number) => `
    @keyframes react-fade-in {
      0%   { transform: translateY(${height}px); }
      100% { transform: translateY(0); }
    }
  `;

export const outEffect = (height: number) => `
    @keyframes react-fade-out {
      0%   { transform: translateY(0); }
      100% { transform: -translateY(${height}px); }
    }
  `;
