var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetHeader.esbuild-svelte-fake-css
var require_ = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetHeader.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBodyLeft.esbuild-svelte-fake-css
var require_2 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBodyLeft.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsLinage.esbuild-svelte-fake-css
var require_3 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsLinage.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsGear.esbuild-svelte-fake-css
var require_4 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsGear.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsTechnique.esbuild-svelte-fake-css
var require_5 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsTechnique.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsInjury.esbuild-svelte-fake-css
var require_6 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsInjury.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBodyRight.esbuild-svelte-fake-css
var require_7 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBodyRight.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBase.esbuild-svelte-fake-css
var require_8 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBase.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// module/actor/actor.js
var VagabondsActor = class extends Actor {
  prepareData() {
    super.prepareData();
    const actorData = this;
    if (this.type === "character")
      this._prepareCharacterData(actorData);
  }
  _prepareCharacterData(actorData) {
    return actorData;
  }
  async _preUpdate(changed, options, user) {
    if (await super._preUpdate(changed, options, user) === false)
      return false;
    if ("health" in (this.system || {})) {
      foundry.utils.setProperty(options, "vagabonds.health", { ...this.system.health });
    }
  }
  async _onUpdate(data, options, userId) {
    super._onUpdate(data, options, userId);
    const curr = this.system.health.value;
    const hp = options.vagabonds?.health;
    if (hp) {
      const changes = {
        hp: curr - hp.value
      };
      console.log(changes);
      changes.total = changes.hp;
      this._displayTokenEffect(changes);
    }
  }
  _displayTokenMessage(message, fill) {
    const tokens = this.isToken ? [this.token] : this.getActiveTokens(true, true);
    if (!tokens.length)
      return;
    for (const token of tokens) {
      if (!token.object?.visible || !token.object?.renderable)
        continue;
      const t = token.object;
      canvas.interface.createScrollingText(t.center, message, {
        anchor: CONST.TEXT_ANCHOR_POINTS.TOP,
        fontSize: 48,
        fill,
        stroke: 0,
        strokeThickness: 4,
        jitter: 0.25
      });
    }
  }
  _displayTokenEffect(changes) {
    let key;
    let value;
    if (changes.hp < 0) {
      key = "damage";
      value = changes.total;
    } else if (changes.hp > 0) {
      key = "healing";
      value = changes.total;
    }
    if (!key || !value)
      return;
    const tokens = this.isToken ? [this.token] : this.getActiveTokens(true, true);
    if (!tokens.length)
      return;
    const pct = Math.clamp(Math.abs(value) / this.system.health.max, 0, 1);
    const fill = CONFIG.Vagabonds.tokenHPColors[key];
    for (const token of tokens) {
      if (!token.object?.visible || !token.object?.renderable)
        continue;
      const t = token.object;
      canvas.interface.createScrollingText(t.center, value.signedString(), {
        anchor: CONST.TEXT_ANCHOR_POINTS.TOP,
        fontSize: 16 + 32 * pct,
        fill,
        stroke: 0,
        strokeThickness: 4,
        jitter: 0.25
      });
    }
  }
};

// node_modules/svelte/internal/index.mjs
function noop() {
}
var identity = (x) => x;
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
var is_client = typeof window !== "undefined";
var now = is_client ? () => window.performance.now() : () => Date.now();
var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
var tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_empty_stylesheet(node) {
  const style_element = element("style");
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
var managed_styles = new Map();
var active = 0;
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return hash2 >>> 0;
}
function create_style_information(doc, node) {
  const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
  managed_styles.set(doc, info);
  return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = "{\n";
  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
  }
  const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node);
  const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }
  const animation = node.style.animation || "";
  node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}
function delete_rule(node, name) {
  const previous = (node.style.animation || "").split(", ");
  const next = previous.filter(name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1);
  const deleted = previous.length - next.length;
  if (deleted) {
    node.style.animation = next.join(", ");
    active -= deleted;
    if (!active)
      clear_rules();
  }
}
function clear_rules() {
  raf(() => {
    if (active)
      return;
    managed_styles.forEach((info) => {
      const { ownerNode } = info.stylesheet;
      if (ownerNode)
        detach(ownerNode);
    });
    managed_styles.clear();
  });
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = new Set();
var flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var promise;
function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }
  return promise;
}
function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}
var outroing = new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
var null_transition = { duration: 0 };
function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;
  function clear_animation() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function init2(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }
  function go(b) {
    const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };
    if (!b) {
      program.group = outros;
      outros.r += 1;
    }
    if (running_program || pending_program) {
      pending_program = program;
    } else {
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }
      if (b)
        tick2(0, 1);
      running_program = init2(program, duration);
      add_render_callback(() => dispatch(node, b, "start"));
      loop((now2) => {
        if (pending_program && now2 > pending_program.start) {
          running_program = init2(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, "start");
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }
        if (running_program) {
          if (now2 >= running_program.end) {
            tick2(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, "end");
            if (!pending_program) {
              if (running_program.b) {
                clear_animation();
              } else {
                if (!--running_program.group.r)
                  run_all(running_program.group.c);
              }
            }
            running_program = null;
          } else if (now2 >= running_program.start) {
            const p = now2 - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick2(t, 1 - t);
          }
        }
        return !!(running_program || pending_program);
      });
    }
  }
  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance9, create_fragment9, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance9 ? instance9(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment9 ? create_fragment9($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/svelte/store/index.mjs
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}

// module/svelte/VagabondsActorSheetHeader.svelte
function create_fragment(ctx) {
  let actorhead;
  let img;
  let img_src_value;
  let img_title_value;
  let t0;
  let div0;
  let input0;
  let input0_value_value;
  let t1;
  let div1;
  let input1;
  let input1_value_value;
  let t2;
  let label0;
  let t4;
  let div2;
  let input2;
  let input2_value_value;
  let t5;
  let span;
  let t7;
  let input3;
  let input3_value_value;
  let t8;
  let label1;
  let t10;
  let div3;
  let input4;
  let input4_value_value;
  let t11;
  let label2;
  let t13;
  let div4;
  let input5;
  let input5_value_value;
  let t14;
  let label3;
  let t16;
  let div5;
  let input6;
  let input6_value_value;
  let t17;
  let label4;
  let mounted;
  let dispose;
  return {
    c() {
      actorhead = element("actorhead");
      img = element("img");
      t0 = space();
      div0 = element("div");
      input0 = element("input");
      t1 = space();
      div1 = element("div");
      input1 = element("input");
      t2 = space();
      label0 = element("label");
      label0.textContent = "Level";
      t4 = space();
      div2 = element("div");
      input2 = element("input");
      t5 = space();
      span = element("span");
      span.textContent = "/";
      t7 = space();
      input3 = element("input");
      t8 = space();
      label1 = element("label");
      label1.textContent = "HP";
      t10 = space();
      div3 = element("div");
      input4 = element("input");
      t11 = space();
      label2 = element("label");
      label2.textContent = "Speed";
      t13 = space();
      div4 = element("div");
      input5 = element("input");
      t14 = space();
      label3 = element("label");
      label3.textContent = "Armor";
      t16 = space();
      div5 = element("div");
      input6 = element("input");
      t17 = space();
      label4 = element("label");
      label4.textContent = "Exp";
      attr(img, "class", "profile-img svelte-dstnap");
      if (!src_url_equal(img.src, img_src_value = ctx[0].actor.img))
        attr(img, "src", img_src_value);
      attr(img, "data-edit", "img");
      attr(img, "title", img_title_value = ctx[0].actor.name);
      attr(img, "height", "125");
      attr(img, "width", "125");
      attr(input0, "name", "name");
      attr(input0, "type", "text");
      input0.value = input0_value_value = ctx[0].actor.name;
      attr(input0, "placeholder", "Name");
      attr(input0, "class", "svelte-dstnap");
      attr(div0, "class", "namebox svelte-dstnap");
      attr(input1, "type", "text");
      attr(input1, "name", "system.attributes.level.value");
      input1.value = input1_value_value = ctx[0].actor.system.attributes.level.value;
      attr(input1, "data-dtype", "Number");
      attr(input1, "class", "svelte-dstnap");
      attr(div1, "class", "item1 svelte-dstnap");
      attr(input2, "type", "text");
      attr(input2, "name", "system.health.value");
      input2.value = input2_value_value = ctx[0].actor.system.health.value;
      attr(input2, "data-dtype", "Number");
      attr(input2, "class", "svelte-dstnap");
      attr(input3, "type", "text");
      attr(input3, "name", "system.health.max");
      input3.value = input3_value_value = ctx[0].actor.system.health.max;
      attr(input3, "data-dtype", "Number");
      attr(input3, "class", "svelte-dstnap");
      attr(div2, "class", "item2 svelte-dstnap");
      attr(input4, "type", "text");
      attr(input4, "name", "system.speed.value");
      input4.value = input4_value_value = ctx[0].actor.system.speed.value;
      attr(input4, "data-dtype", "Number");
      attr(input4, "class", "svelte-dstnap");
      attr(div3, "class", "item3 svelte-dstnap");
      attr(input5, "type", "text");
      attr(input5, "name", "system.armor.value");
      input5.value = input5_value_value = ctx[0].actor.system.armor.value;
      attr(input5, "data-dtype", "Number");
      attr(input5, "class", "svelte-dstnap");
      attr(label3, "for", "system.armor.value");
      attr(label3, "class", "resource-label rollable");
      attr(label3, "data-defend", "2d6");
      attr(div4, "class", "item4 svelte-dstnap");
      attr(input6, "type", "text");
      attr(input6, "name", "system.attributes.xp.value");
      input6.value = input6_value_value = ctx[0].actor.system.attributes.xp.value;
      attr(input6, "data-dtype", "Number");
      attr(input6, "class", "svelte-dstnap");
      attr(div5, "class", "item5 svelte-dstnap");
      attr(actorhead, "class", "svelte-dstnap");
    },
    m(target, anchor) {
      insert(target, actorhead, anchor);
      append(actorhead, img);
      append(actorhead, t0);
      append(actorhead, div0);
      append(div0, input0);
      append(actorhead, t1);
      append(actorhead, div1);
      append(div1, input1);
      append(div1, t2);
      append(div1, label0);
      append(actorhead, t4);
      append(actorhead, div2);
      append(div2, input2);
      append(div2, t5);
      append(div2, span);
      append(div2, t7);
      append(div2, input3);
      append(div2, t8);
      append(div2, label1);
      append(actorhead, t10);
      append(actorhead, div3);
      append(div3, input4);
      append(div3, t11);
      append(div3, label2);
      append(actorhead, t13);
      append(actorhead, div4);
      append(div4, input5);
      append(div4, t14);
      append(div4, label3);
      append(actorhead, t16);
      append(actorhead, div5);
      append(div5, input6);
      append(div5, t17);
      append(div5, label4);
      if (!mounted) {
        dispose = [
          listen(img, "click", ctx[2]),
          listen(label3, "click", function() {
            if (is_function(ctx[0].sheet?._onRoll.bind(ctx[0].sheet)))
              ctx[0].sheet?._onRoll.bind(ctx[0].sheet).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx[0].actor.img)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & 1 && img_title_value !== (img_title_value = ctx[0].actor.name)) {
        attr(img, "title", img_title_value);
      }
      if (dirty & 1 && input0_value_value !== (input0_value_value = ctx[0].actor.name) && input0.value !== input0_value_value) {
        input0.value = input0_value_value;
      }
      if (dirty & 1 && input1_value_value !== (input1_value_value = ctx[0].actor.system.attributes.level.value) && input1.value !== input1_value_value) {
        input1.value = input1_value_value;
      }
      if (dirty & 1 && input2_value_value !== (input2_value_value = ctx[0].actor.system.health.value) && input2.value !== input2_value_value) {
        input2.value = input2_value_value;
      }
      if (dirty & 1 && input3_value_value !== (input3_value_value = ctx[0].actor.system.health.max) && input3.value !== input3_value_value) {
        input3.value = input3_value_value;
      }
      if (dirty & 1 && input4_value_value !== (input4_value_value = ctx[0].actor.system.speed.value) && input4.value !== input4_value_value) {
        input4.value = input4_value_value;
      }
      if (dirty & 1 && input5_value_value !== (input5_value_value = ctx[0].actor.system.armor.value) && input5.value !== input5_value_value) {
        input5.value = input5_value_value;
      }
      if (dirty & 1 && input6_value_value !== (input6_value_value = ctx[0].actor.system.attributes.xp.value) && input6.value !== input6_value_value) {
        input6.value = input6_value_value;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(actorhead);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(0, $sheetData = value));
  const filePicker = (event) => {
    const attr2 = event.currentTarget.dataset.edit;
    const current = getProperty($sheetData.actor, attr2);
    const fp = new FilePicker({
      type: "image",
      current,
      callback: (path) => {
        $sheetData.actor.update({ [attr2]: path });
      },
      top: $sheetData.sheet.position.top + 40,
      left: $sheetData.sheet.position.left + 10
    });
    return fp.browse();
  };
  return [$sheetData, sheetData, filePicker];
}
var VagabondsActorSheetHeader = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
};
var VagabondsActorSheetHeader_default = VagabondsActorSheetHeader;
require_();

// module/svelte/VagabondsActorSheetBodyLeft.svelte
function create_fragment2(ctx) {
  let main;
  let label0;
  let br;
  let t1;
  let label1;
  let t5;
  let label2;
  let t9;
  let input0;
  let input0_value_value;
  let t10;
  let label3;
  let t14;
  let input1;
  let input1_value_value;
  let t15;
  let label4;
  let t19;
  let input2;
  let input2_value_value;
  let t20;
  let label5;
  let t24;
  let input3;
  let input3_value_value;
  let t25;
  let label6;
  let t29;
  let input4;
  let input4_value_value;
  let t30;
  let label7;
  let t34;
  let input5;
  let input5_value_value;
  let t35;
  let label8;
  let t37;
  let input6;
  let input6_value_value;
  let t38;
  let input7;
  let input7_value_value;
  let t39;
  let input8;
  let input8_value_value;
  let t40;
  let input9;
  let input9_value_value;
  let t41;
  let input10;
  let input10_value_value;
  let t42;
  let input11;
  let input11_value_value;
  return {
    c() {
      main = element("main");
      label0 = element("label");
      label0.textContent = "Traits";
      br = element("br");
      t1 = space();
      label1 = element("label");
      label1.innerHTML = `Sum relevant positive and negative traits to determine <strong>aptitude</strong> (max +3, min -3)`;
      t5 = space();
      label2 = element("label");
      label2.innerHTML = `My <strong>Approch</strong> to Conflict:`;
      t9 = space();
      input0 = element("input");
      t10 = space();
      label3 = element("label");
      label3.innerHTML = `My <strong>Goal</strong>:`;
      t14 = space();
      input1 = element("input");
      t15 = space();
      label4 = element("label");
      label4.innerHTML = `My <strong>Gimmick</strong>:`;
      t19 = space();
      input2 = element("input");
      t20 = space();
      label5 = element("label");
      label5.innerHTML = `My <strong>Background</strong>:`;
      t24 = space();
      input3 = element("input");
      t25 = space();
      label6 = element("label");
      label6.innerHTML = `My <strong>Foreground</strong>:`;
      t29 = space();
      input4 = element("input");
      t30 = space();
      label7 = element("label");
      label7.innerHTML = `My <strong>Weakness</strong>:`;
      t34 = space();
      input5 = element("input");
      t35 = space();
      label8 = element("label");
      label8.textContent = "Additional Traits Per Level:";
      t37 = space();
      input6 = element("input");
      t38 = space();
      input7 = element("input");
      t39 = space();
      input8 = element("input");
      t40 = space();
      input9 = element("input");
      t41 = space();
      input10 = element("input");
      t42 = space();
      input11 = element("input");
      attr(label0, "class", "resource-label");
      attr(label1, "class", "rules-label");
      attr(input0, "type", "text");
      attr(input0, "name", "system.aproaches.conflict");
      input0.value = input0_value_value = ctx[1].system.aproaches.conflict;
      attr(input0, "class", "svelte-wvbhe2");
      attr(input1, "type", "text");
      attr(input1, "name", "system.aproaches.goal");
      input1.value = input1_value_value = ctx[1].system.aproaches.goal;
      attr(input1, "class", "svelte-wvbhe2");
      attr(input2, "type", "text");
      attr(input2, "name", "system.aproaches.gimmick");
      input2.value = input2_value_value = ctx[1].system.aproaches.gimmick;
      attr(input2, "class", "svelte-wvbhe2");
      attr(input3, "type", "text");
      attr(input3, "name", "system.aproaches.background");
      input3.value = input3_value_value = ctx[1].system.aproaches.background;
      attr(input3, "class", "svelte-wvbhe2");
      attr(input4, "type", "text");
      attr(input4, "name", "system.aproaches.foreground");
      input4.value = input4_value_value = ctx[1].system.aproaches.foreground;
      attr(input4, "class", "svelte-wvbhe2");
      attr(input5, "type", "text");
      attr(input5, "name", "system.aproaches.weakness");
      input5.value = input5_value_value = ctx[1].system.aproaches.weakness;
      attr(input5, "class", "svelte-wvbhe2");
      attr(input6, "type", "text");
      attr(input6, "name", "system.aproaches.a1");
      input6.value = input6_value_value = ctx[1].system.aproaches.a1;
      attr(input6, "class", "svelte-wvbhe2");
      attr(input7, "type", "text");
      attr(input7, "name", "system.aproaches.a2");
      input7.value = input7_value_value = ctx[1].system.aproaches.a2;
      attr(input7, "class", "svelte-wvbhe2");
      attr(input8, "type", "text");
      attr(input8, "name", "system.aproaches.a3");
      input8.value = input8_value_value = ctx[1].system.aproaches.a3;
      attr(input8, "class", "svelte-wvbhe2");
      attr(input9, "type", "text");
      attr(input9, "name", "system.aproaches.a4");
      input9.value = input9_value_value = ctx[1].system.aproaches.a4;
      attr(input9, "class", "svelte-wvbhe2");
      attr(input10, "type", "text");
      attr(input10, "name", "system.aproaches.a5");
      input10.value = input10_value_value = ctx[1].system.aproaches.a5;
      attr(input10, "class", "svelte-wvbhe2");
      attr(input11, "type", "text");
      attr(input11, "name", "system.aproaches.a6");
      input11.value = input11_value_value = ctx[1].system.aproaches.a6;
      attr(input11, "class", "svelte-wvbhe2");
      attr(main, "class", "svelte-wvbhe2");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      append(main, label0);
      append(main, br);
      append(main, t1);
      append(main, label1);
      append(main, t5);
      append(main, label2);
      append(main, t9);
      append(main, input0);
      append(main, t10);
      append(main, label3);
      append(main, t14);
      append(main, input1);
      append(main, t15);
      append(main, label4);
      append(main, t19);
      append(main, input2);
      append(main, t20);
      append(main, label5);
      append(main, t24);
      append(main, input3);
      append(main, t25);
      append(main, label6);
      append(main, t29);
      append(main, input4);
      append(main, t30);
      append(main, label7);
      append(main, t34);
      append(main, input5);
      append(main, t35);
      append(main, label8);
      append(main, t37);
      append(main, input6);
      append(main, t38);
      append(main, input7);
      append(main, t39);
      append(main, input8);
      append(main, t40);
      append(main, input9);
      append(main, t41);
      append(main, input10);
      append(main, t42);
      append(main, input11);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(2, $sheetData = value));
  let { data } = $sheetData;
  return [sheetData, data];
}
var VagabondsActorSheetBodyLeft = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, {});
  }
};
var VagabondsActorSheetBodyLeft_default = VagabondsActorSheetBodyLeft;
require_2();

// node_modules/svelte/easing/index.mjs
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}

// node_modules/svelte/transition/index.mjs
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
  };
}

// module/svelte/VagabondsLinage.svelte
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let raw_value = ctx[10].system.description + "";
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      attr(div, "class", "item_desc svelte-hd66n3");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = raw_value;
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[10].system.description + ""))
        div.innerHTML = raw_value;
      ;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_each_block(ctx) {
  let div2;
  let li;
  let div0;
  let img;
  let img_src_value;
  let img_title_value;
  let t0;
  let h4;
  let t1_value = ctx[10].name + "";
  let t1;
  let t2;
  let div1;
  let a0;
  let t3;
  let a1;
  let t4;
  let a2;
  let li_data_item_id_value;
  let t5;
  let t6;
  let div2_transition;
  let current;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[6](ctx[10]);
  }
  function click_handler_1() {
    return ctx[7](ctx[10]);
  }
  function click_handler_2(...args) {
    return ctx[8](ctx[10], ...args);
  }
  let if_block = ctx[1][ctx[10]._id] && create_if_block(ctx);
  return {
    c() {
      div2 = element("div");
      li = element("li");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h4 = element("h4");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      a0 = element("a");
      a0.innerHTML = `<i class="fas fa-bullhorn"></i>`;
      t3 = space();
      a1 = element("a");
      a1.innerHTML = `<i class="fas fa-edit"></i>`;
      t4 = space();
      a2 = element("a");
      a2.innerHTML = `<i class="fas fa-trash"></i>`;
      t5 = space();
      if (if_block)
        if_block.c();
      t6 = space();
      if (!src_url_equal(img.src, img_src_value = ctx[10].img))
        attr(img, "src", img_src_value);
      attr(img, "title", img_title_value = ctx[10].name);
      attr(img, "width", "24");
      attr(img, "height", "24");
      attr(div0, "class", "item-image");
      attr(h4, "class", "item-name");
      attr(a1, "class", "item-control item-edit");
      attr(a1, "title", "Edit Item");
      attr(a2, "class", "item-control item-delete");
      attr(a2, "title", "Delete Item");
      attr(div1, "class", "item-controls");
      attr(li, "class", "item flexrow");
      attr(li, "data-item-id", li_data_item_id_value = ctx[10]._id);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, li);
      append(li, div0);
      append(div0, img);
      append(li, t0);
      append(li, h4);
      append(h4, t1);
      append(li, t2);
      append(li, div1);
      append(div1, a0);
      append(div1, t3);
      append(div1, a1);
      append(div1, t4);
      append(div1, a2);
      append(div2, t5);
      if (if_block)
        if_block.m(div2, null);
      append(div2, t6);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "click", click_handler),
          listen(h4, "click", click_handler_1),
          listen(a0, "click", click_handler_2),
          listen(a1, "click", function() {
            if (is_function(ctx[3]?._onItemEdit(ctx[10]._id)))
              ctx[3]?._onItemEdit(ctx[10]._id).apply(this, arguments);
          }),
          listen(a2, "click", function() {
            if (is_function(ctx[3]?._onItemDelete(ctx[10]._id)))
              ctx[3]?._onItemDelete(ctx[10]._id).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx[10].img)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & 1 && img_title_value !== (img_title_value = ctx[10].name)) {
        attr(img, "title", img_title_value);
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[10].name + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 1 && li_data_item_id_value !== (li_data_item_id_value = ctx[10]._id)) {
        attr(li, "data-item-id", li_data_item_id_value);
      }
      if (ctx[1][ctx[10]._id]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, t6);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      if (local) {
        add_render_callback(() => {
          if (!div2_transition)
            div2_transition = create_bidirectional_transition(div2, slide, {}, true);
          div2_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (local) {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, slide, {}, false);
        div2_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      if (detaching && div2_transition)
        div2_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment3(ctx) {
  let lineage_1;
  let label;
  let t1;
  let ol;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      lineage_1 = element("lineage");
      label = element("label");
      label.textContent = "Lineage";
      t1 = space();
      ol = element("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(label, "class", "resource-label");
      attr(ol, "class", "items-list");
    },
    m(target, anchor) {
      insert(target, lineage_1, anchor);
      append(lineage_1, label);
      append(lineage_1, t1);
      append(lineage_1, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ol, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 27) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ol, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(lineage_1);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(5, $sheetData = value));
  let { sheet } = $sheetData;
  let lineage;
  let showItems = [];
  let hasBeenClicked = false;
  function ToggleItem(Item2) {
    if (hasBeenClicked)
      return;
    hasBeenClicked = true;
    setTimeout(() => {
      hasBeenClicked = false;
    }, 200);
    if (!showItems[Item2]) {
      $$invalidate(1, showItems[Item2] = true, showItems);
    } else {
      $$invalidate(1, showItems[Item2] = false, showItems);
    }
  }
  const click_handler = (item) => ToggleItem(item._id);
  const click_handler_1 = (item) => ToggleItem(item._id);
  const click_handler_2 = (item, e) => {
    sheet?._chatItem(item._id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $:
        $$invalidate(0, lineage = $sheetData.lineage);
    }
  };
  return [
    lineage,
    showItems,
    sheetData,
    sheet,
    ToggleItem,
    $sheetData,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
var VagabondsLinage = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance3, create_fragment3, safe_not_equal, {});
  }
};
var VagabondsLinage_default = VagabondsLinage;
require_3();

// module/svelte/VagabondsGear.svelte
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_if_block2(ctx) {
  let div;
  let raw_value = ctx[10].system.description + "";
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      attr(div, "class", "item_desc svelte-mzg8sr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = raw_value;
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[10].system.description + ""))
        div.innerHTML = raw_value;
      ;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_each_block2(ctx) {
  let div2;
  let li;
  let div0;
  let img;
  let img_src_value;
  let img_title_value;
  let t0;
  let h4;
  let t1_value = ctx[10].name + "";
  let t1;
  let t2;
  let div1;
  let a0;
  let t3;
  let a1;
  let t4;
  let a2;
  let li_data_item_id_value;
  let t5;
  let div2_transition;
  let current;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[6](ctx[10]);
  }
  function click_handler_1() {
    return ctx[7](ctx[10]);
  }
  function click_handler_2(...args) {
    return ctx[8](ctx[10], ...args);
  }
  let if_block = ctx[1][ctx[10]._id] && create_if_block2(ctx);
  return {
    c() {
      div2 = element("div");
      li = element("li");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h4 = element("h4");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      a0 = element("a");
      a0.innerHTML = `<i class="fas fa-bullhorn"></i>`;
      t3 = space();
      a1 = element("a");
      a1.innerHTML = `<i class="fas fa-edit"></i>`;
      t4 = space();
      a2 = element("a");
      a2.innerHTML = `<i class="fas fa-trash"></i>`;
      t5 = space();
      if (if_block)
        if_block.c();
      if (!src_url_equal(img.src, img_src_value = ctx[10].img))
        attr(img, "src", img_src_value);
      attr(img, "title", img_title_value = ctx[10].name);
      attr(img, "width", "24");
      attr(img, "height", "24");
      attr(div0, "class", "item-image");
      attr(h4, "class", "item-name");
      attr(a1, "class", "item-control item-edit");
      attr(a1, "title", "Edit Item");
      attr(a2, "class", "item-control item-delete");
      attr(a2, "title", "Delete Item");
      attr(div1, "class", "item-controls");
      attr(li, "class", "item flexrow");
      attr(li, "data-item-id", li_data_item_id_value = ctx[10]._id);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, li);
      append(li, div0);
      append(div0, img);
      append(li, t0);
      append(li, h4);
      append(h4, t1);
      append(li, t2);
      append(li, div1);
      append(div1, a0);
      append(div1, t3);
      append(div1, a1);
      append(div1, t4);
      append(div1, a2);
      append(div2, t5);
      if (if_block)
        if_block.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "click", click_handler),
          listen(h4, "click", click_handler_1),
          listen(a0, "click", click_handler_2),
          listen(a1, "click", function() {
            if (is_function(ctx[3]?._onItemEdit(ctx[10]._id)))
              ctx[3]?._onItemEdit(ctx[10]._id).apply(this, arguments);
          }),
          listen(a2, "click", function() {
            if (is_function(ctx[3]?._onItemDelete(ctx[10]._id)))
              ctx[3]?._onItemDelete(ctx[10]._id).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx[10].img)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & 1 && img_title_value !== (img_title_value = ctx[10].name)) {
        attr(img, "title", img_title_value);
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[10].name + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 1 && li_data_item_id_value !== (li_data_item_id_value = ctx[10]._id)) {
        attr(li, "data-item-id", li_data_item_id_value);
      }
      if (ctx[1][ctx[10]._id]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block2(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      if (local) {
        add_render_callback(() => {
          if (!div2_transition)
            div2_transition = create_bidirectional_transition(div2, slide, {}, true);
          div2_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (local) {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, slide, {}, false);
        div2_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      if (detaching && div2_transition)
        div2_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment4(ctx) {
  let gear_1;
  let label0;
  let t1;
  let label1;
  let t3;
  let ol;
  let t4;
  let li;
  let div0;
  let t5;
  let div1;
  let t6;
  let div2;
  let a;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      gear_1 = element("gear");
      label0 = element("label");
      label0.textContent = "Equipment";
      t1 = space();
      label1 = element("label");
      label1.textContent = "-1 speed for each loaded-down limb and point of armor; at -7, you are immobilized";
      t3 = space();
      ol = element("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t4 = space();
      li = element("li");
      div0 = element("div");
      t5 = space();
      div1 = element("div");
      t6 = space();
      div2 = element("div");
      a = element("a");
      a.innerHTML = `<i class="fas fa-plus"></i> Add item`;
      attr(label0, "class", "resource-label");
      attr(label1, "class", "rules-label");
      attr(div0, "class", "item-image");
      attr(div1, "class", "item-name");
      attr(a, "class", "item-control item-create");
      attr(a, "title", "Create item");
      attr(a, "data-type", "item");
      attr(div2, "class", "item-controls");
      attr(li, "class", "item flexrow item-header");
      attr(ol, "class", "items-list");
    },
    m(target, anchor) {
      insert(target, gear_1, anchor);
      append(gear_1, label0);
      append(gear_1, t1);
      append(gear_1, label1);
      append(gear_1, t3);
      append(gear_1, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ol, null);
      }
      append(ol, t4);
      append(ol, li);
      append(li, div0);
      append(li, t5);
      append(li, div1);
      append(li, t6);
      append(li, div2);
      append(div2, a);
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", ctx[3]?._onItemCreate.bind(ctx[3]));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 27) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ol, t4);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(gear_1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance4($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(5, $sheetData = value));
  let { sheet } = $sheetData;
  let gear;
  let showItems = [];
  let hasBeenClicked = false;
  function ToggleItem(Item2) {
    if (hasBeenClicked)
      return;
    hasBeenClicked = true;
    setTimeout(() => {
      hasBeenClicked = false;
    }, 200);
    if (!showItems[Item2]) {
      $$invalidate(1, showItems[Item2] = true, showItems);
    } else {
      $$invalidate(1, showItems[Item2] = false, showItems);
    }
  }
  const click_handler = (item) => ToggleItem(item._id);
  const click_handler_1 = (item) => ToggleItem(item._id);
  const click_handler_2 = (item, e) => {
    sheet?._chatItem(item._id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $:
        $$invalidate(0, gear = $sheetData.gear);
    }
  };
  return [
    gear,
    showItems,
    sheetData,
    sheet,
    ToggleItem,
    $sheetData,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
var VagabondsGear = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance4, create_fragment4, safe_not_equal, {});
  }
};
var VagabondsGear_default = VagabondsGear;
require_4();

// module/svelte/VagabondsTechnique.svelte
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_if_block3(ctx) {
  let div;
  let raw_value = ctx[10].system.description + "";
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      attr(div, "class", "item_desc svelte-mzg8sr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = raw_value;
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[10].system.description + ""))
        div.innerHTML = raw_value;
      ;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_each_block3(ctx) {
  let div2;
  let li;
  let div0;
  let img;
  let img_src_value;
  let img_title_value;
  let t0;
  let h4;
  let t1_value = ctx[10].name + "";
  let t1;
  let t2;
  let div1;
  let a0;
  let t3;
  let a1;
  let t4;
  let a2;
  let li_data_item_id_value;
  let t5;
  let t6;
  let div2_transition;
  let current;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[6](ctx[10]);
  }
  function click_handler_1() {
    return ctx[7](ctx[10]);
  }
  function click_handler_2(...args) {
    return ctx[8](ctx[10], ...args);
  }
  let if_block = ctx[1][ctx[10]._id] && create_if_block3(ctx);
  return {
    c() {
      div2 = element("div");
      li = element("li");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h4 = element("h4");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      a0 = element("a");
      a0.innerHTML = `<i class="fas fa-bullhorn"></i>`;
      t3 = space();
      a1 = element("a");
      a1.innerHTML = `<i class="fas fa-edit"></i>`;
      t4 = space();
      a2 = element("a");
      a2.innerHTML = `<i class="fas fa-trash"></i>`;
      t5 = space();
      if (if_block)
        if_block.c();
      t6 = space();
      if (!src_url_equal(img.src, img_src_value = ctx[10].img))
        attr(img, "src", img_src_value);
      attr(img, "title", img_title_value = ctx[10].name);
      attr(img, "width", "24");
      attr(img, "height", "24");
      attr(div0, "class", "item-image");
      attr(h4, "class", "item-name");
      attr(a1, "class", "item-control item-edit");
      attr(a1, "title", "Edit Item");
      attr(a2, "class", "item-control item-delete");
      attr(a2, "title", "Delete Item");
      attr(div1, "class", "item-controls");
      attr(li, "class", "item flexrow");
      attr(li, "data-item-id", li_data_item_id_value = ctx[10]._id);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, li);
      append(li, div0);
      append(div0, img);
      append(li, t0);
      append(li, h4);
      append(h4, t1);
      append(li, t2);
      append(li, div1);
      append(div1, a0);
      append(div1, t3);
      append(div1, a1);
      append(div1, t4);
      append(div1, a2);
      append(div2, t5);
      if (if_block)
        if_block.m(div2, null);
      append(div2, t6);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "click", click_handler),
          listen(h4, "click", click_handler_1),
          listen(a0, "click", click_handler_2),
          listen(a1, "click", function() {
            if (is_function(ctx[3]?._onItemEdit(ctx[10]._id)))
              ctx[3]?._onItemEdit(ctx[10]._id).apply(this, arguments);
          }),
          listen(a2, "click", function() {
            if (is_function(ctx[3]?._onItemDelete(ctx[10]._id)))
              ctx[3]?._onItemDelete(ctx[10]._id).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx[10].img)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & 1 && img_title_value !== (img_title_value = ctx[10].name)) {
        attr(img, "title", img_title_value);
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[10].name + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 1 && li_data_item_id_value !== (li_data_item_id_value = ctx[10]._id)) {
        attr(li, "data-item-id", li_data_item_id_value);
      }
      if (ctx[1][ctx[10]._id]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block3(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, t6);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      if (local) {
        add_render_callback(() => {
          if (!div2_transition)
            div2_transition = create_bidirectional_transition(div2, slide, {}, true);
          div2_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (local) {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, slide, {}, false);
        div2_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      if (detaching && div2_transition)
        div2_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment5(ctx) {
  let lineage;
  let label;
  let t1;
  let ol;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      lineage = element("lineage");
      label = element("label");
      label.textContent = "Techniques";
      t1 = space();
      ol = element("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(label, "class", "resource-label");
      attr(ol, "class", "items-list");
    },
    m(target, anchor) {
      insert(target, lineage, anchor);
      append(lineage, label);
      append(lineage, t1);
      append(lineage, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ol, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 27) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ol, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(lineage);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance5($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(5, $sheetData = value));
  let { sheet } = $sheetData;
  let techniques;
  let showItems = [];
  let hasBeenClicked = false;
  function ToggleItem(Item2) {
    if (hasBeenClicked)
      return;
    hasBeenClicked = true;
    setTimeout(() => {
      hasBeenClicked = false;
    }, 200);
    if (!showItems[Item2]) {
      $$invalidate(1, showItems[Item2] = true, showItems);
    } else {
      $$invalidate(1, showItems[Item2] = false, showItems);
    }
  }
  const click_handler = (item) => ToggleItem(item._id);
  const click_handler_1 = (item) => ToggleItem(item._id);
  const click_handler_2 = (item, e) => {
    sheet?._chatItem(item._id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $:
        $$invalidate(0, techniques = $sheetData.techniques);
    }
  };
  return [
    techniques,
    showItems,
    sheetData,
    sheet,
    ToggleItem,
    $sheetData,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
var VagabondsTechnique = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance5, create_fragment5, safe_not_equal, {});
  }
};
var VagabondsTechnique_default = VagabondsTechnique;
require_5();

// module/svelte/VagabondsInjury.svelte
function get_each_context4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_if_block4(ctx) {
  let div;
  let raw_value = ctx[10].system.description + "";
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      attr(div, "class", "item_desc svelte-mzg8sr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = raw_value;
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[10].system.description + ""))
        div.innerHTML = raw_value;
      ;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_each_block4(ctx) {
  let div2;
  let li;
  let div0;
  let img;
  let img_src_value;
  let img_title_value;
  let t0;
  let h4;
  let t1_value = ctx[10].name + "";
  let t1;
  let t2;
  let div1;
  let a0;
  let t3;
  let a1;
  let t4;
  let a2;
  let li_data_item_id_value;
  let t5;
  let div2_transition;
  let current;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[6](ctx[10]);
  }
  function click_handler_1() {
    return ctx[7](ctx[10]);
  }
  function click_handler_2(...args) {
    return ctx[8](ctx[10], ...args);
  }
  let if_block = ctx[1][ctx[10]._id] && create_if_block4(ctx);
  return {
    c() {
      div2 = element("div");
      li = element("li");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h4 = element("h4");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      a0 = element("a");
      a0.innerHTML = `<i class="fas fa-bullhorn"></i>`;
      t3 = space();
      a1 = element("a");
      a1.innerHTML = `<i class="fas fa-edit"></i>`;
      t4 = space();
      a2 = element("a");
      a2.innerHTML = `<i class="fas fa-trash"></i>`;
      t5 = space();
      if (if_block)
        if_block.c();
      if (!src_url_equal(img.src, img_src_value = ctx[10].img))
        attr(img, "src", img_src_value);
      attr(img, "title", img_title_value = ctx[10].name);
      attr(img, "width", "24");
      attr(img, "height", "24");
      attr(div0, "class", "item-image");
      attr(h4, "class", "item-name");
      attr(a1, "class", "item-control item-edit");
      attr(a1, "title", "Edit Item");
      attr(a2, "class", "item-control item-delete");
      attr(a2, "title", "Delete Item");
      attr(div1, "class", "item-controls");
      attr(li, "class", "item flexrow");
      attr(li, "data-item-id", li_data_item_id_value = "" + (ctx[10]._id + "}"));
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, li);
      append(li, div0);
      append(div0, img);
      append(li, t0);
      append(li, h4);
      append(h4, t1);
      append(li, t2);
      append(li, div1);
      append(div1, a0);
      append(div1, t3);
      append(div1, a1);
      append(div1, t4);
      append(div1, a2);
      append(div2, t5);
      if (if_block)
        if_block.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "click", click_handler),
          listen(h4, "click", click_handler_1),
          listen(a0, "click", click_handler_2),
          listen(a1, "click", function() {
            if (is_function(ctx[3]?._onItemEdit(ctx[10]._id)))
              ctx[3]?._onItemEdit(ctx[10]._id).apply(this, arguments);
          }),
          listen(a2, "click", function() {
            if (is_function(ctx[3]?._onItemDelete(ctx[10]._id)))
              ctx[3]?._onItemDelete(ctx[10]._id).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx[10].img)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & 1 && img_title_value !== (img_title_value = ctx[10].name)) {
        attr(img, "title", img_title_value);
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[10].name + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 1 && li_data_item_id_value !== (li_data_item_id_value = "" + (ctx[10]._id + "}"))) {
        attr(li, "data-item-id", li_data_item_id_value);
      }
      if (ctx[1][ctx[10]._id]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block4(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      if (local) {
        add_render_callback(() => {
          if (!div2_transition)
            div2_transition = create_bidirectional_transition(div2, slide, {}, true);
          div2_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (local) {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, slide, {}, false);
        div2_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      if (detaching && div2_transition)
        div2_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment6(ctx) {
  let lineage;
  let label;
  let t1;
  let ol;
  let t2;
  let li;
  let div0;
  let t3;
  let div1;
  let t4;
  let div2;
  let a;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      lineage = element("lineage");
      label = element("label");
      label.textContent = "Injury";
      t1 = space();
      ol = element("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      li = element("li");
      div0 = element("div");
      t3 = space();
      div1 = element("div");
      t4 = space();
      div2 = element("div");
      a = element("a");
      a.innerHTML = `<i class="fas fa-plus"></i> Add injury`;
      attr(label, "class", "resource-label");
      attr(div0, "class", "item-image");
      attr(div1, "class", "item-name");
      attr(a, "class", "item-control item-create");
      attr(a, "title", "Create item");
      attr(a, "data-type", "injury");
      attr(div2, "class", "item-controls");
      attr(li, "class", "item flexrow item-header");
      attr(ol, "class", "items-list");
    },
    m(target, anchor) {
      insert(target, lineage, anchor);
      append(lineage, label);
      append(lineage, t1);
      append(lineage, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ol, null);
      }
      append(ol, t2);
      append(ol, li);
      append(li, div0);
      append(li, t3);
      append(li, div1);
      append(li, t4);
      append(li, div2);
      append(div2, a);
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", ctx[3]?._onItemCreate.bind(ctx[3]));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 27) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context4(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block4(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ol, t2);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(lineage);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance6($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(5, $sheetData = value));
  let { sheet } = $sheetData;
  let injury;
  let showItems = [];
  let hasBeenClicked = false;
  function ToggleItem(Item2) {
    if (hasBeenClicked)
      return;
    hasBeenClicked = true;
    setTimeout(() => {
      hasBeenClicked = false;
    }, 200);
    if (!showItems[Item2]) {
      $$invalidate(1, showItems[Item2] = true, showItems);
    } else {
      $$invalidate(1, showItems[Item2] = false, showItems);
    }
  }
  const click_handler = (item) => ToggleItem(item._id);
  const click_handler_1 = (item) => ToggleItem(item._id);
  const click_handler_2 = (item, e) => {
    sheet?._chatItem(item._id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $:
        $$invalidate(0, injury = $sheetData.injury);
    }
  };
  return [
    injury,
    showItems,
    sheetData,
    sheet,
    ToggleItem,
    $sheetData,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
var VagabondsInjury = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance6, create_fragment6, safe_not_equal, {});
  }
};
var VagabondsInjury_default = VagabondsInjury;
require_6();

// module/svelte/VagabondsActorSheetBodyRight.svelte
function create_fragment7(ctx) {
  let main;
  let label0;
  let t1;
  let label1;
  let t5;
  let textarea;
  let textarea_value_value;
  let t6;
  let vagabondslinage;
  let t7;
  let vagabondsgear;
  let t8;
  let vagabondstechnique;
  let t9;
  let vagabondsinjury;
  let current;
  vagabondslinage = new VagabondsLinage_default({});
  vagabondsgear = new VagabondsGear_default({});
  vagabondstechnique = new VagabondsTechnique_default({});
  vagabondsinjury = new VagabondsInjury_default({});
  return {
    c() {
      main = element("main");
      label0 = element("label");
      label0.textContent = "Core Flaw";
      t1 = space();
      label1 = element("label");
      label1.innerHTML = `Once per session, use to wriggle into or out of trouble, or <strong>succumb</strong> for +3xp`;
      t5 = space();
      textarea = element("textarea");
      t6 = space();
      create_component(vagabondslinage.$$.fragment);
      t7 = space();
      create_component(vagabondsgear.$$.fragment);
      t8 = space();
      create_component(vagabondstechnique.$$.fragment);
      t9 = space();
      create_component(vagabondsinjury.$$.fragment);
      attr(label0, "class", "resource-label");
      attr(label1, "class", "rules-label");
      attr(textarea, "class", "border_none");
      attr(textarea, "name", "system.aproaches.coreflaw");
      attr(textarea, "rows", "6");
      textarea.value = textarea_value_value = ctx[0].actor.system.aproaches.coreflaw;
      attr(main, "class", "svelte-yoob1a");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      append(main, label0);
      append(main, t1);
      append(main, label1);
      append(main, t5);
      append(main, textarea);
      append(main, t6);
      mount_component(vagabondslinage, main, null);
      append(main, t7);
      mount_component(vagabondsgear, main, null);
      append(main, t8);
      mount_component(vagabondstechnique, main, null);
      append(main, t9);
      mount_component(vagabondsinjury, main, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1 && textarea_value_value !== (textarea_value_value = ctx2[0].actor.system.aproaches.coreflaw)) {
        textarea.value = textarea_value_value;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(vagabondslinage.$$.fragment, local);
      transition_in(vagabondsgear.$$.fragment, local);
      transition_in(vagabondstechnique.$$.fragment, local);
      transition_in(vagabondsinjury.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(vagabondslinage.$$.fragment, local);
      transition_out(vagabondsgear.$$.fragment, local);
      transition_out(vagabondstechnique.$$.fragment, local);
      transition_out(vagabondsinjury.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      destroy_component(vagabondslinage);
      destroy_component(vagabondsgear);
      destroy_component(vagabondstechnique);
      destroy_component(vagabondsinjury);
    }
  };
}
function instance7($$self, $$props, $$invalidate) {
  let $sheetData;
  let sheetData = getContext("sheetStore");
  component_subscribe($$self, sheetData, (value) => $$invalidate(0, $sheetData = value));
  return [$sheetData, sheetData];
}
var VagabondsActorSheetBodyRight = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance7, create_fragment7, safe_not_equal, {});
  }
};
var VagabondsActorSheetBodyRight_default = VagabondsActorSheetBodyRight;
require_7();

// module/svelte/VagabondsActorSheetBase.svelte
function create_fragment8(ctx) {
  let header;
  let vagabondsactorsheetheader;
  let t0;
  let container;
  let vagabondsactorsheetbodyleft;
  let t1;
  let vagabondsactorsheetbodyright;
  let current;
  vagabondsactorsheetheader = new VagabondsActorSheetHeader_default({});
  vagabondsactorsheetbodyleft = new VagabondsActorSheetBodyLeft_default({});
  vagabondsactorsheetbodyright = new VagabondsActorSheetBodyRight_default({});
  return {
    c() {
      header = element("header");
      create_component(vagabondsactorsheetheader.$$.fragment);
      t0 = space();
      container = element("container");
      create_component(vagabondsactorsheetbodyleft.$$.fragment);
      t1 = space();
      create_component(vagabondsactorsheetbodyright.$$.fragment);
      attr(container, "class", "svelte-1x8y3nd");
    },
    m(target, anchor) {
      insert(target, header, anchor);
      mount_component(vagabondsactorsheetheader, header, null);
      insert(target, t0, anchor);
      insert(target, container, anchor);
      mount_component(vagabondsactorsheetbodyleft, container, null);
      append(container, t1);
      mount_component(vagabondsactorsheetbodyright, container, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(vagabondsactorsheetheader.$$.fragment, local);
      transition_in(vagabondsactorsheetbodyleft.$$.fragment, local);
      transition_in(vagabondsactorsheetbodyright.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(vagabondsactorsheetheader.$$.fragment, local);
      transition_out(vagabondsactorsheetbodyleft.$$.fragment, local);
      transition_out(vagabondsactorsheetbodyright.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(header);
      destroy_component(vagabondsactorsheetheader);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(container);
      destroy_component(vagabondsactorsheetbodyleft);
      destroy_component(vagabondsactorsheetbodyright);
    }
  };
}
function instance8($$self, $$props, $$invalidate) {
  let { dataStore } = $$props;
  setContext("sheetStore", dataStore);
  $$self.$$set = ($$props2) => {
    if ("dataStore" in $$props2)
      $$invalidate(0, dataStore = $$props2.dataStore);
  };
  return [dataStore];
}
var VagabondsActorSheetBase = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance8, create_fragment8, safe_not_equal, { dataStore: 0 });
  }
};
var VagabondsActorSheetBase_default = VagabondsActorSheetBase;
require_8();

// module/actor/actor-sheet.js
var VagabondsActorSheet = class extends ActorSheet {
  app = null;
  dataStore = null;
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "actor"],
      template: "systems/vagabonds/templates/actor/actor-sheetv2.html",
      width: 640,
      height: 700,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "description"
        }
      ]
    });
  }
  getData() {
    const data = super.getData();
    if (this.actor.type == "character") {
      this._prepareCharacterItems(data);
    }
    return data;
  }
  _prepareCharacterItems(sheetData) {
    const actorData = sheetData.data;
    const gear = [];
    const techniques = [];
    const lineage = [];
    const injury = [];
    const approach = [];
    const trait = [];
    for (let i of sheetData.items) {
      i.img = i.img || DEFAULT_TOKEN;
      switch (i.type) {
        case "item":
          gear.push(i);
          break;
        case "lineage":
          lineage.push(i);
          break;
        case "technique":
          techniques.push(i);
          break;
        case "injury":
          injury.push(i);
          break;
        case "approach":
          approach.push(i);
          break;
        case "trait":
          trait.push(i);
      }
    }
    sheetData.gear = gear.sort((a, b) => a.sort - b.sort);
    sheetData.techniques = techniques.sort((a, b) => a.sort - b.sort);
    ;
    sheetData.lineage = lineage;
    sheetData.injury = injury.sort((a, b) => a.sort - b.sort);
    ;
    sheetData.approach = approach;
    sheetData.trait = trait;
    sheetData.sheet = this;
  }
  async migrateData(...args) {
    super.migrateData(...args);
    console.log("Attempting to migrate system data");
  }
  activateListeners(html) {
    super.activateListeners(html);
    if (!this.options.editable)
      return;
    html.find(".item-create").click(this._onItemCreate.bind(this));
    html.find(".item-edit").click((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });
    html.find(".item-name").dblclick((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });
    html.find(".item-delete").click((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.delete();
      li.slideUp(200, () => this.render(false));
    });
    html.find(".rollable").click(this._onRoll.bind(this));
  }
  async _onItemDelete(itemId) {
    const item = this.actor.items.get(itemId);
    item.delete();
    this.render();
  }
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const data = foundry.utils.duplicate(header.dataset);
    const name = `New ${type.capitalize()}`;
    const itemData = {
      name,
      type
    };
    return await Item.create(itemData, { parent: this.actor }).then((item) => {
      item.sheet.render(true);
    });
  }
  async _onItemEdit(itemId) {
    const item = this.actor.items.get(itemId);
    item.sheet.render(true);
  }
  _onRoll(event) {
    event.preventDefault();
    const element2 = event.currentTarget;
    const dataset = element2.dataset;
    if (dataset.roll) {
      let roll = new Roll(dataset.roll, this.actor);
      let label = dataset.label ? `Rolling ${dataset.label}` : "";
      roll.roll().toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label
      });
    }
    if (dataset.defend) {
      game.vagabonds.RollHelper.displayRollModal(true);
    }
  }
  async _chatItem(id) {
    const item = this.actor.items.get(id);
    let template = "systems/vagabonds/templates/chat/ability.html";
    item.system.description = await TextEditor.enrichHTML(item.system.description, { async: true });
    let data = { ability: item, actor: this.actor.system };
    const html = await renderTemplate(template, data);
    const chatData = {
      actor: this.actor._id,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER,
      content: html,
      speaker: {
        actor: this.actor
      }
    };
    return ChatMessage.create(chatData);
  }
  render(force = false, options = {}) {
    let sheetData = this.getData();
    if (this.app !== null) {
      let states = Application.RENDER_STATES;
      if (this._state == states.RENDERING || this._state == states.RENDERED) {
        this.dataStore?.set(sheetData);
        return;
      }
    }
    this._render(force, options).catch((err) => {
      err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
      console.error(err);
      this._state = Application.RENDER_STATES.ERROR;
    }).then((rendered) => {
      this.dataStore = writable(sheetData);
      this.app = new VagabondsActorSheetBase_default({
        target: this.element.find("form").get(0),
        props: {
          dataStore: this.dataStore
        }
      });
    });
    options.editable = options.editable ?? this.object.isOwner;
    this.object.apps[this.appId] = this;
    return this;
  }
  close(options = {}) {
    if (this.app != null) {
      this.app.$destroy();
      this.app = null;
      this.dataStore = null;
    }
    return super.close(options);
  }
};

// module/actor/npc-sheet.js
var VagabondsNPCSheet = class extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "actor"],
      template: "systems/vagabonds/templates/actor/npc-sheet.html",
      width: 600,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }
  getData() {
    const data = super.getData();
    return data;
  }
  activateListeners(html) {
    super.activateListeners(html);
    if (!this.options.editable)
      return;
    html.find(".item-create").click(this._onItemCreate.bind(this));
    html.find(".item-speak").click((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      this._chatItem(li.data("itemId"));
    });
    html.find(".item-edit").click((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });
    html.find(".item-name").dblclick((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });
    html.find(".item-delete").click((ev) => {
      const li = $(ev.currentTarget).parents(".item");
      this.actor.deleteEmbeddedDocuments("Item", [li.data("itemId")]);
      li.slideUp(200, () => this.render(false));
    });
  }
  async _chatItem(id) {
    const item = this.actor.items.get(id);
    let template = "systems/vagabonds/templates/chat/ability.html";
    item.system.description = await TextEditor.enrichHTML(item.system.description, { async: true });
    let data = { ability: item, actor: this.actor.system };
    const html = await renderTemplate(template, data);
    const chatData = {
      actor: this.actor._id,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER,
      content: html,
      speaker: {
        actor: this.actor
      }
    };
    return ChatMessage.create(chatData);
  }
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const data = foundry.utils.duplicate(header.dataset);
    const name = `New ${type.capitalize()}`;
    const itemData = {
      name,
      type,
      data
    };
    delete itemData.data["type"];
    await this.actor.createEmbeddedDocuments("Item", [itemData], {});
  }
};

// module/item/item.js
var VagabondsItem = class extends Item {
  prepareData() {
    super.prepareData();
    const itemData = this;
    if (itemData.type == "injury" && itemData.img == "icons/svg/item-bag.svg") {
      itemData.img = "systems/vagabonds/assets/cut-palm.svg";
    } else if (itemData.type == "item" && itemData.img == "icons/svg/item-bag.svg") {
      itemData.img = "systems/vagabonds/assets/swap-bag.svg";
    } else if (itemData.type == "technique" && itemData.img == "icons/svg/item-bag.svg") {
      itemData.img = "systems/vagabonds/assets/swords-emblem.svg";
    }
  }
  async _preCreate(data, options, user) {
    await super._preCreate(data, options, user);
    this.updateSource({ sort: Date.now() });
  }
};

// module/item/item-sheet.js
var VagabondsItemSheet = class extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "item"],
      width: 520,
      height: 480,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }
  get template() {
    const path = "systems/vagabonds/templates/item";
    return `${path}/item-sheet.html`;
  }
  async getData() {
    const data = super.getData();
    data.enrichedDescription = await TextEditor.enrichHTML(this.object.system.description, { async: true });
    return data;
  }
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height - 192;
    sheetBody.css("height", bodyHeight);
    return position;
  }
  activateListeners(html) {
    super.activateListeners(html);
    if (!this.options.editable)
      return;
  }
};

// module/helper/roll_helper.js
var RollHelper = class {
  static async displayRollModal(defend) {
    defend = typeof defend !== "undefined" ? defend : "";
    if (defend == true) {
      defend = "checked";
    }
    let confirmed = false;
    new Dialog({
      title: "Roll + Apptitude",
      content: `
            <form>
            <div class="form-group">
            <label>Apptitude:</label>
                <select id="modifier-value" name="modifier-value">
                    <option value="+3">+3</option>
                    <option value="+2">+2</option>
                    <option value="+1">+1</option>
                    <option value="+0" selected>0</option>
                    <option value="-1">-1</option>
                    <option value="-2">-2</option>
                    <option value="-3">-3</option>
                </select>
            </div>
            <div class="form-group">
                <label>Defence Roll?</label>
                <input type="checkbox" ` + defend + ` id="rolltype-defense" name="rolltype-defense" value="1"> Yes
            </div>
            <div class="form-group">
            <label>Roll Type:</label>
                <select id="roll-adv" name="roll-adv">
                    <option value="adv">Advantage</option>
                    <option value="normal" selected>Normal</option>
                    <option value="dis">Disadvantage</option>
                </select>
            </div>
            </form>
            `,
      buttons: {
        one: {
          icon: '<i class="fas fa-check"></i>',
          label: "Roll!",
          callback: () => confirmed = true
        },
        two: {
          icon: '<i class="fas fa-times"></i>',
          label: "Cancel",
          callback: () => confirmed = false
        }
      },
      default: "Cancel",
      close: (html) => {
        if (confirmed) {
          let rollModifier = parseInt(html.find("[name=modifier-value]")[0].value);
          let rollisDefense = html.find(`[name=rolltype-defense]`).is(":checked");
          let rollType = html.find("[name=roll-adv]")[0].value;
          let actor = game.user.character ?? canvas.tokens.controlled[0]?.actor ?? game.actors.find((a) => a.owner);
          if (actor == void 0) {
            ui.notifications.error("You must select a token to roll");
            return;
          }
          let roll;
          let RollTemplate;
          let baseRoll = "2d6";
          console.log(rollType);
          if (rollType == "adv")
            baseRoll = "3d6kh2";
          if (rollType == "dis")
            baseRoll = "3d6kl2";
          if (rollModifier >= 0) {
            roll = new Roll(baseRoll + " +" + rollModifier, actor);
          } else {
            roll = new Roll(baseRoll + rollModifier, actor);
          }
          roll.evaluate().then(function(result) {
            let RollResult;
            if (rollisDefense == true) {
              RollResult = { type: "defend", high: "0", low: "0", damage: "No", outcome: " Outright success", roll };
              if (result.terms[0].results[0].result > result.terms[0].results[1].result) {
                RollResult.high = result.terms[0].results[0].result;
                RollResult.low = result.terms[0].results[1].result;
              } else {
                RollResult.low = result.terms[0].results[0].result;
                RollResult.high = result.terms[0].results[1].result;
              }
              if (result._total < 7) {
                RollResult.outcome = "Failure";
                RollResult.damage = RollResult.high - result.data.system.armor.value;
              } else if (result._total < 10) {
                RollResult.outcome = "Partial Success";
                RollResult.damage = RollResult.low - result.data.system.armor.value;
              }
              if (RollResult.damage < 0) {
                RollResult.damage = 0;
              }
              let template = "systems/vagabonds/templates/chat/rolls.html";
              RollTemplate = renderTemplate(template, RollResult).then((content) => {
                result.toMessage({
                  user: game.user.id,
                  speaker: ChatMessage.getSpeaker({ actor: result.data }),
                  flavor: content
                });
              });
            } else {
              RollResult = { type: "action", outcome: "Complete Success", apptitude: rollModifier, roll: result };
              if (result._total < 7) {
                RollResult.outcome = "Failure";
              } else if (result._total < 10) {
                RollResult.outcome = "Partial Success";
              } else if (result._total > 12) {
                RollResult.outcome = "Critical Success";
              }
              let template = "systems/vagabonds/templates/chat/rolls.html";
              RollTemplate = renderTemplate(template, RollResult).then((content) => {
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({}),
                  flavor: content
                });
              });
            }
          });
        }
      }
    }).render(true);
  }
};

// module/data-models.js
var VagabondsBaseActorModel = class extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      health: new fields.SchemaField({
        value: new fields.NumberField({
          required: true,
          initial: 8,
          integer: true
        }),
        min: new fields.NumberField({
          required: true,
          initial: 0,
          integer: true
        }),
        max: new fields.NumberField({
          required: true,
          initial: 8,
          integer: true
        })
      }),
      speed: new fields.SchemaField({
        value: new fields.NumberField({
          required: true,
          initial: 0,
          integer: true
        }),
        min: new fields.NumberField({
          required: true,
          initial: -10,
          integer: true
        }),
        max: new fields.NumberField({
          required: true,
          initial: 15,
          integer: true
        })
      }),
      armor: new fields.SchemaField({
        value: new fields.NumberField({
          required: true,
          initial: 0,
          integer: true
        }),
        min: new fields.NumberField({
          required: true,
          initial: 0,
          integer: true
        }),
        max: new fields.NumberField({
          required: true,
          initial: 20,
          integer: true
        })
      }),
      attributes: new fields.SchemaField({
        level: new fields.SchemaField({
          value: new fields.NumberField({
            required: true,
            initial: 1,
            integer: true
          })
        }),
        xp: new fields.SchemaField({
          value: new fields.NumberField({
            required: true,
            initial: 0,
            integer: true
          }),
          min: new fields.NumberField({
            required: true,
            initial: 0,
            integer: true
          }),
          max: new fields.NumberField({
            required: true,
            initial: 100,
            integer: true
          })
        })
      })
    };
  }
};

// module/vagabonds.js
Hooks.once("init", async function() {
  game.vagabonds = {
    VagabondsActor,
    VagabondsItem,
    RollHelper
  };
  CONFIG.Combat.initiative = {
    formula: "@speed.value",
    decimals: 2
  };
  CONFIG.Vagabonds = {};
  CONFIG.Actor.documentClass = VagabondsActor;
  CONFIG.Item.documentClass = VagabondsItem;
  CONFIG.Vagabonds.tokenHPColors = {
    damage: 15711680,
    healing: 65280
  };
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("vagabonds", VagabondsNPCSheet, { types: ["npc"], makeDefault: true });
  Actors.registerSheet("vagabonds", VagabondsActorSheet, { types: ["character"], makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("vagabonds", VagabondsItemSheet, { makeDefault: true });
  Handlebars.registerHelper("concat", function() {
    var outStr = "";
    for (var arg in arguments) {
      if (typeof arguments[arg] != "object") {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });
  Handlebars.registerHelper("toLowerCase", function(str) {
    return str.toLowerCase();
  });
  Handlebars.registerHelper("ifCond", function(v1, operator, v2, options) {
    switch (operator) {
      case "==":
        return v1 == v2 ? options.fn(this) : options.inverse(this);
      case "===":
        return v1 === v2 ? options.fn(this) : options.inverse(this);
      case "!=":
        return v1 != v2 ? options.fn(this) : options.inverse(this);
      case "!==":
        return v1 !== v2 ? options.fn(this) : options.inverse(this);
      case "<":
        return v1 < v2 ? options.fn(this) : options.inverse(this);
      case "<=":
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
      case ">":
        return v1 > v2 ? options.fn(this) : options.inverse(this);
      case ">=":
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
      case "&&":
        return v1 && v2 ? options.fn(this) : options.inverse(this);
      case "||":
        return v1 || v2 ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  });
});
Hooks.on("renderSidebarTab", (app, html, data) => {
  html.find(".chat-control-icon").click(async (event) => {
    RollHelper.displayRollModal();
  });
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=vagabonds.js.map
