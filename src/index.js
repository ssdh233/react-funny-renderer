import Reconciler from 'react-reconciler';

const FunnyRenderer = Reconciler({
  createInstance(type, props) {
    console.log("createInstance", { type, props })
    return {
      type,
      props,
    }
  },
  prepareForCommit() { },
  getRootHostContext(rootInstance) { },
  resetAfterCommit() { },
  getChildHostContext() { },
  shouldSetTextContent(type, props) {
    return false;
  },
  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },
  appendInitialChild: (parent, child) => {
    parent.child = child;
    console.log("appendInitialChild", { parent, child })
  },
  appendChild(parent, child) {
    parent.child = child;
    console.log("appendChild", { parent, child })
  },
  finalizeInitialChildren(wordElement, type, props) {
    return false;
  },
  appendChildToContainer: (...args) => { console.log("appendChildToContainer", args) },
  clearContainer: () => { },
  supportsMutation: true
});

const RendererPublicAPI = {
  render(element, container, callback) {
    console.log({ element, container, callback })
    // Call MyRenderer.updateContainer() to schedule changes on the roots.
    // See ReactDOM, React Native, or React ART for practical examples.

    if (!container.__rootContainer) {
      console.log('creating container')
      container.__rootContainer = FunnyRenderer.createContainer(container, false);

    }
    FunnyRenderer.updateContainer(element, container.__rootContainer);
  }
};

export default RendererPublicAPI;