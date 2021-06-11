var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetHeader.esbuild-svelte-fake-css
var require_ = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetHeader.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBase.esbuild-svelte-fake-css
var require_2 = __commonJS({
  "fakecss:D:/FoundryData/Data/systems/vagabonds/module/svelte/VagabondsActorSheetBase.esbuild-svelte-fake-css"(exports, module) {
    module.exports = {};
  }
});

// module/actor/actor.js
var VagabondsActor = class extends Actor {
  prepareData() {
    super.prepareData();
    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;
    if (actorData.type === "character")
      this._prepareCharacterData(actorData);
  }
  _prepareCharacterData(actorData) {
    const data = actorData.data;
  }
};

// node_modules/svelte/internal/index.mjs
function noop() {
}
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
var tasks = new Set();
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
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
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
var active_docs = new Set();
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
var flushing = false;
var seen_callbacks = new Set();
function flush() {
  if (flushing)
    return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
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
  flushing = false;
  seen_callbacks.clear();
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
var outroing = new Set();
var outros;
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
  }
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
  "ismap",
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
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
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
function init(component, options, instance3, create_fragment3, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance3 ? instance3(component, options.props || {}, (i, ret, ...rest) => {
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
  $$.fragment = create_fragment3 ? create_fragment3($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
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
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
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
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}

// module/svelte/VagabondsActorSheetHeader.svelte
function create_fragment(ctx) {
  let main;
  let img;
  let img_src_value;
  let img_title_value;
  let t0;
  let t1_value = ctx[1].name + "";
  let t1;
  return {
    c() {
      main = element("main");
      img = element("img");
      t0 = space();
      t1 = text(t1_value);
      attr(img, "class", "profile-img");
      if (img.src !== (img_src_value = ctx[1].img))
        attr(img, "src", img_src_value);
      attr(img, "data-edit", "img");
      attr(img, "title", img_title_value = ctx[1].name);
      attr(img, "height", "100");
      attr(img, "width", "100");
      attr(main, "class", "svelte-1tky8bj");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      append(main, img);
      append(main, t0);
      append(main, t1);
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
function instance($$self, $$props, $$invalidate) {
  let $sheetData;
  let { dataStore } = $$props;
  let sheetData = getContext("sheetStore", dataStore);
  component_subscribe($$self, sheetData, (value) => $$invalidate(3, $sheetData = value));
  let { actor, data, actorData, sheet } = $sheetData;
  $$self.$$set = ($$props2) => {
    if ("dataStore" in $$props2)
      $$invalidate(2, dataStore = $$props2.dataStore);
  };
  return [sheetData, data, dataStore];
}
var VagabondsActorSheetHeader = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { dataStore: 2 });
  }
};
var VagabondsActorSheetHeader_default = VagabondsActorSheetHeader;
require_();

// module/svelte/VagabondsActorSheetBase.svelte
function create_fragment2(ctx) {
  let header;
  let vagabondsactorsheetheader;
  let t0;
  let main;
  let current;
  vagabondsactorsheetheader = new VagabondsActorSheetHeader_default({});
  return {
    c() {
      header = element("header");
      create_component(vagabondsactorsheetheader.$$.fragment);
      t0 = space();
      main = element("main");
      main.textContent = "Body Here!";
      attr(main, "class", "svelte-1tky8bj");
    },
    m(target, anchor) {
      insert(target, header, anchor);
      mount_component(vagabondsactorsheetheader, header, null);
      insert(target, t0, anchor);
      insert(target, main, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(vagabondsactorsheetheader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(vagabondsactorsheetheader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(header);
      destroy_component(vagabondsactorsheetheader);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let $dataStore, $$unsubscribe_dataStore = noop, $$subscribe_dataStore = () => ($$unsubscribe_dataStore(), $$unsubscribe_dataStore = subscribe(dataStore, ($$value) => $$invalidate(1, $dataStore = $$value)), dataStore);
  $$self.$$.on_destroy.push(() => $$unsubscribe_dataStore());
  let { dataStore } = $$props;
  $$subscribe_dataStore();
  setContext("sheetStore", dataStore);
  let { actor, data, actorData, sheet } = $dataStore;
  $$self.$$set = ($$props2) => {
    if ("dataStore" in $$props2)
      $$subscribe_dataStore($$invalidate(0, dataStore = $$props2.dataStore));
  };
  return [dataStore];
}
var VagabondsActorSheetBase = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, { dataStore: 0 });
  }
};
var VagabondsActorSheetBase_default = VagabondsActorSheetBase;
require_2();

// module/actor/actor-sheet.js
var VagabondsActorSheet = class extends ActorSheet {
  app = null;
  dataStore = null;
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "actor"],
      template: "systems/vagabonds/templates/actor/actor-sheetv2.html",
      width: 640,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }
  getData() {
    const data = super.getData();
    let isOwner = this.actor.isOwner;
    data.dtypes = ["String", "Number", "Boolean"];
    for (let attr2 of Object.values(data.data.data.attributes)) {
      attr2.isCheckbox = attr2.dtype === "Boolean";
    }
    if (this.actor.data.type == "character") {
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
    for (let i of sheetData.items) {
      let item = i;
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
      }
    }
    actorData.gear = gear;
    actorData.techniques = techniques;
    actorData.lineage = lineage;
    actorData.injury = injury;
    actorData.approach = approach;
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
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const data = duplicate(header.dataset);
    const name = `New ${type.capitalize()}`;
    const itemData = {
      name,
      type,
      data
    };
    delete itemData.data["type"];
    return await Item.create(itemData, { parent: this.actor });
  }
  _onRoll(event) {
    event.preventDefault();
    const element2 = event.currentTarget;
    const dataset = element2.dataset;
    if (dataset.roll) {
      let roll = new Roll(dataset.roll, this.actor.data.data);
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
  render(force = false, options = {}) {
    let sheetData = this.getData();
    if (this.app !== null) {
      this.dataStore?.set(sheetData);
      return this;
    } else {
      this._render(force, options).catch((err) => {
        err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
        console.error(err);
        this._state = Application.RENDER_STATES.ERROR;
      }).then((rendered) => {
        this.dataStore = writable(sheetData);
        console.log(sheetData);
        this.app = new VagabondsActorSheetBase_default({
          target: this.element.find("form").get(0),
          props: {
            dataStore: this.dataStore
          }
        });
      });
    }
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
    return mergeObject(super.defaultOptions, {
      classes: ["vagabonds", "sheet", "actor"],
      template: "systems/vagabonds/templates/actor/npc-sheet.html",
      width: 600,
      height: 440,
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
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const data = duplicate(header.dataset);
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
    const itemData = this.data;
    const actorData = this.actor ? this.actor.data : {};
    const data = itemData.data;
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
    this.data.update({ sort: Date.now() });
  }
};

// module/item/item-sheet.js
var VagabondsItemSheet = class extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
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
  getData() {
    const data = super.getData();
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
          let token = canvas.tokens.controlled;
          let actor = game.user.character ?? canvas.tokens.controlled[0]?.actor ?? game.actors.find((a) => a.owner);
          if (actor.length == 0) {
            ui.notifications.error("You must have an actor to roll a defense roll");
            return;
          } else {
          }
          if (rollModifier >= 0) {
            var roll = new Roll("2d6 +" + rollModifier, actor.data);
          } else {
            var roll = new Roll("2d6 " + rollModifier, actor.data);
          }
          roll.evaluate({ async: true }).then(function(result) {
            if (rollisDefense == true) {
              var RollResult = { type: "defend", high: "0", low: "0", damage: "No", outcome: " Outright success", roll };
              if (result.terms[0].results[0].result > result.terms[0].results[1].result) {
                RollResult.high = result.terms[0].results[0].result;
                RollResult.low = result.terms[0].results[1].result;
              } else {
                RollResult.low = result.terms[0].results[0].result;
                RollResult.high = result.terms[0].results[1].result;
              }
              if (result._total < 7) {
                RollResult.outcome = "Failure";
                RollResult.damage = RollResult.high - result.data.data.armor.value;
              } else if (result._total < 10) {
                RollResult.outcome = "Partial Success";
                RollResult.damage = RollResult.low - result.data.data.armor.value;
              }
              if (RollResult.damage < 0) {
                RollResult.damage = 0;
              }
              let template = "systems/vagabonds/templates/chat/rolls.html";
              var RollTemplate = renderTemplate(template, RollResult).then((content) => {
                result.toMessage({
                  user: game.user.id,
                  speaker: ChatMessage.getSpeaker({ actor: result.data }),
                  flavor: content
                });
              });
            } else {
              var RollResult = { type: "action", outcome: "Complete Success", apptitude: rollModifier, roll: result };
              if (result._total < 7) {
                RollResult.outcome = "Failure";
              } else if (result._total < 10) {
                RollResult.outcome = "Partial Success";
              } else if (result._total > 12) {
                RollResult.outcome = "Critical Success";
              }
              let template = "systems/vagabonds/templates/chat/rolls.html";
              var RollTemplate = renderTemplate(template, RollResult).then((content) => {
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
  CONFIG.Actor.documentClass = VagabondsActor;
  CONFIG.Item.documentClass = VagabondsItem;
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("vagabonds", VagabondsNPCSheet, { types: ["npc"], makeDefault: true });
  Actors.registerSheet("vagabonds", VagabondsActorSheet, { makeDefault: true });
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
