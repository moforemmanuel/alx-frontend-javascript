export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction()
  } catch (error) {
    value = err.toString();
  } finally {
    queue.push(value);
    queue.push('Guardrail was processed');
  }
}
