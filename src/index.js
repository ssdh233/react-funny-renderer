import Reconciler from "react-reconciler";

const log = (...args) => {
  // console.log(...args);
};

const FunnyRenderer = Reconciler({
  createInstance(type, props) {
    log("createInstance", { type, props });
    return {
      type,
      props,
      children: [],
    };
  },
  prepareForCommit() {},
  getRootHostContext(rootInstance) {},
  resetAfterCommit() {},
  getChildHostContext() {},
  shouldSetTextContent(type, props) {
    return false;
  },
  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },
  appendInitialChild: (parent, child) => {
    parent.children.push(child);
    log("appendInitialChild", { parent, child });
  },
  appendChild(parent, child) {
    parent.children.push(child);
    log("appendChild", { parent, child });
  },
  finalizeInitialChildren(wordElement, type, props) {
    return false;
  },
  appendChildToContainer: (container, child) => {
    if (!container.children) {
      container.children = [];
    }
    container.children.push(child);
    log("appendChildToContainer", { container, child });
  },
  clearContainer: () => {},
  supportsMutation: true,
});

const RendererPublicAPI = {
  render(element, container, callback) {
    log({ element, container, callback });
    // Call MyRenderer.updateContainer() to schedule changes on the roots.
    // See ReactDOM, React Native, or React ART for practical examples.

    if (!container.__rootContainer) {
      log("creating container");
      container.__rootContainer = FunnyRenderer.createContainer(container, false);
    }
    FunnyRenderer.updateContainer(element, container.__rootContainer);
  },
};

export default RendererPublicAPI;
