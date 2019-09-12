---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
js-script: p5-demo.js
---

# Circuit Models of Many Body Quantum Dynamicss

---

<div style="text-align: center;" id="p5-demo"></div>


---

## Unitary Circuits

Examples of gates

---

## Trotterized Hamiltonian Dynamics

---

## Example of Kicked Ising

---

## More general

- Disorder, MBL

- RUCs

- Motivation: "general" quantum dynamics (no Hamiltonian) with only constraint of locality.

---

## Graphical Representation

Relate tensors to diagrams  

---

## Unitarity

---

## Folded picture

---

## Correlation Functions


---

## Emergence of the Light Cone

Due to Amos / de Luca / Chalker?

---

## On the Light Cone

---

## Quantum Channels

Range of behaviour

---

## Bistochastic

---

## Classification of Channels for Qubits

---

## Off the Light Cone

Bigger channel

---

## Dual Unitarity

---

## Example: Self Dual Kicked Ising

---

## Correlations on Light Cone Only

Bertini _et al._

---

## Reduced Density Matrix

---

## Entanglement in Dual Unitary Models

---

## Other Directions

- OTOCs
- Measurements (Skinner pix)
- Entanglement (if we didn't have time)
- Classical model (Prosen this week)

---

## Further Reading

---

## Math

In-line math: $x + y = z$

Block math:

$$
f\left( x \right) = \;\frac{{2\left( {x + 4} \right)\left( {x - 4} \right)}}{{\left( {x + 4} \right)\left( {x + 1} \right)}} \\
= d
$$

---

## Fragments

Make content appear incrementally

```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} **Two** {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

Press `Space` to play!

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} **Two** {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}

---

A fragment can accept two optional parameters:

- `class`: use a custom style (requires definition in custom CSS)
- `weight`: sets the order in which a fragment appears

---

## Speaker Notes

Add speaker notes to your presentation

```markdown
{{%/* speaker_note */%}}
- Only the speaker can read these notes
- Press `S` key to view
{{%/* /speaker_note */%}}
```

Press the `S` key to view the speaker notes!

{{< speaker_note >}}
- Only the speaker can read these notes
- Press `S` key to view
{{< /speaker_note >}}

---

## Themes

- black: Black background, white text, blue links (default)
- white: White background, black text, blue links
- league: Gray background, white text, blue links
- beige: Beige background, dark text, brown links
- sky: Blue background, thin dark text, blue links

---

- night: Black background, thick white text, orange links
- serif: Cappuccino background, gray text, brown links
- simple: White background, black text, blue links
- solarized: Cream-colored background, dark green text, blue links

---

{{< slide background-image="/img/boards.jpg" >}}

## Custom Slide

Customize the slide style and background

```markdown
{{</* slide background-image="/img/boards.jpg" */>}}
{{</* slide background-color="#0000FF" */>}}
{{</* slide class="my-style" */>}}
```

---

## Custom CSS Example

Let's make headers navy colored.

Create `assets/css/reveal_custom.css` with:

```css
.reveal section h1,
.reveal section h2,
.reveal section h3 {
  color: navy;
}
```

---

# Questions?

[Ask](https://discourse.gohugo.io)

[Documentation](https://sourcethemes.com/academic/docs/)
