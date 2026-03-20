var $1JSLv$react = require("react");
var $1JSLv$privagexyzemojimart = require("@privagexyz/emoji-mart");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "EmojiPicker", () => $be92a0095b219678$export$6335145236247192);
$parcel$export(module.exports, "Emoji", () => $be92a0095b219678$export$56cc48506ff790a);
// @ts-nocheck


function $be92a0095b219678$export$6335145236247192(props) {
    const ref = (0, $1JSLv$react.useRef)(null);
    const instance = (0, $1JSLv$react.useRef)(null);
    if (instance.current) instance.current.update(props);
    (0, $1JSLv$react.useEffect)(()=>{
        const PickerConstructor = window?.customElements.get('em-emoji-picker') ?? (0, $1JSLv$privagexyzemojimart.Picker);
        instance.current = new PickerConstructor({
            ...props,
            ref: ref
        });
        return ()=>{
            instance.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1JSLv$react))).createElement('div', {
        ref: ref
    });
}
function $be92a0095b219678$export$56cc48506ff790a(props) {
    const ref = (0, $1JSLv$react.useRef)(null);
    const instance = (0, $1JSLv$react.useRef)(null);
    if (instance.current) instance.current.update(props);
    (0, $1JSLv$react.useEffect)(()=>{
        const EmojiConstructor = window?.customElements.get('em-emoji') ?? $be92a0095b219678$export$56cc48506ff790a;
        instance.current = new EmojiConstructor({
            ...props,
            ref: ref
        });
        return ()=>{
            instance.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1JSLv$react))).createElement('span', {
        ref: ref
    });
}


//# sourceMappingURL=main.js.map
