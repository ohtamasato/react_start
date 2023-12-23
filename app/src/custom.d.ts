declare module "*.svg" {
    import React = require("react");
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
