import $dvPge$react, {useRef as $dvPge$useRef, useEffect as $dvPge$useEffect} from "react";
import {Picker as $dvPge$Picker} from "@privagexyz/emoji-mart";

// @ts-nocheck


function $e5534fc185f7111e$export$6335145236247192(props) {
    const ref = (0, $dvPge$useRef)(null);
    const instance = (0, $dvPge$useRef)(null);
    if (instance.current) instance.current.update(props);
    (0, $dvPge$useEffect)(()=>{
        const PickerConstructor = window?.customElements.get('em-emoji-picker') ?? (0, $dvPge$Picker);
        instance.current = new PickerConstructor({
            ...props,
            ref: ref
        });
        return ()=>{
            instance.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, $dvPge$react).createElement('div', {
        ref: ref
    });
}
function $e5534fc185f7111e$export$56cc48506ff790a(props) {
    const ref = (0, $dvPge$useRef)(null);
    const instance = (0, $dvPge$useRef)(null);
    if (instance.current) instance.current.update(props);
    (0, $dvPge$useEffect)(()=>{
        const EmojiConstructor = window?.customElements.get('em-emoji') ?? $e5534fc185f7111e$export$56cc48506ff790a;
        instance.current = new EmojiConstructor({
            ...props,
            ref: ref
        });
        return ()=>{
            instance.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, $dvPge$react).createElement('span', {
        ref: ref
    });
}


export {$e5534fc185f7111e$export$6335145236247192 as EmojiPicker, $e5534fc185f7111e$export$56cc48506ff790a as Emoji};
//# sourceMappingURL=module.js.map
