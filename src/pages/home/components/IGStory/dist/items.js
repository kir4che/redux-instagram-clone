"use strict";
exports.__esModule = true;
var Item = function (_a) {
    var name = _a.name, avatar = _a.avatar;
    return (React.createElement("div", { className: 'text-center' },
        React.createElement("div", { className: 'w-[56px] h-[56px] mx-[11px] p-[3px] bg-center bg-cover ring-2 border-2 border-white ring-red-500 rounded-full overflow-hidden', style: {
                backgroundImage: "url(" + avatar + ")"
            } }),
        React.createElement("p", { className: 'mt-1 text-xs' }, name)));
};
exports["default"] = Item;
