---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  reveal_options: {
    hash: true,
    katex: {
      macros: {
        "\\abs" : "\\left|#1\\right|",
        "\\tr" : "\\operatorname{tr}",
        "\\sgn" : "\\operatorname{sgn}",
      },
      throwOnError: false,
    }
  }
---

# Quantum Circuits II
## Some special kinds of circuits

---

## Out of time order correlator

$$
\operatorname{OTOC}_{jk}(t) \equiv \langle Z_j(t)Z_k(0)Z_j(t)Z_k(0)\rangle
$$

- OTOC sometimes written as squared commutator

$$
\langle \left[Z_k(0),Z_j(t)\right]^2 \rangle
$$

- Relation between two expressions is (using $Z^2=1$)

$$
\operatorname{OTOC}_{jk}(t) = \frac{1}{2}\langle \left[Z_k(0),Z_j(t)\right]^2 \rangle + 1
$$


---

$$
\operatorname{OTOC}_{jk}(t) = \frac{1}{2}\langle \left[Z_k(0),Z_j(t)\right]^2 \rangle + 1
$$

 - At short times commutator vanishes so $\operatorname{OTOC}_{jk}(t\to 0)=1$
 
 - In terms of operator expansion

$$
\operatorname{OTOC}\_{jk}(t)= 2^{N-1} \sum_{\mu_{1:N}}\mathcal{C}\_{\mu_{1:N}}^2(t)\left[\delta_{\mu_k,0}+\delta_{\mu_k,3}-\delta_{\mu_k,1}-\delta_{\mu_k,2}\right]
$$

- After operator $Z_j(t)$ spreads from site $j$ to site $k$ $\operatorname{OTOC}\_{jk}(t)\neq 1$

- Characteristic speed of propagation of OTOC is "butterfly velocity" $v_\text{B}$

---

- Since OTOC depends on *square* of the coefficients, a nonzero value survives after averaging over random circuits

- We'll see in next time that dynamics of average OTOC has a simple classical representation

---

## Google's OTOC experiment

- OTOC measured in 2021 by [Google](https://www.science.org/doi/full/10.1126/science.abg5029?casa_token=TkmMj95XIYoAAAAA:NP67A_aYhL8lSDWtuG99i8oFfx1c79-Lz-UGKYsW1-bee3hQ7weJSxLLQwpPzfSEPvEqt6SPbB4UYA) 

<figure align="center">
<img src="assets/google-otoc.png" width="1000">
<figcaption> The measured OTOC for $i\operatorname{\operatorname{\mathsf{SWAP}}}$ gates (top) and $\sqrt{i\operatorname{\mathsf{SWAP}}}$ (bottom) after averaging over single qubit gates.</figcaption>
</figure>

- We'll understand the difference in the next lecture

---

## Operator entanglement

- OTOC provides one measure of operator spreading

- Another question: how many nonzero coefficients  $\mathcal{C}\_{\mu_{1:N}}$?

- Introduce Schmidt decomposition _for operators_ 
$$
\mathcal{O}\_{AB} = \sum\_{n=1}^{\min(n^2_A, n^2_B)} \Sigma\_n A_n\otimes B_n
$$

- $\Sigma_n\geq 0$ are operator Schmidt coefficients

- $A_n$ and $B_n$ are orthonormal operators on $\mathcal{H}\_A$ and $\mathcal{H}\_B$ i.e. $\tr\left[A^\dagger_m A_n\right]=\tr\left[B^\dagger_m B_n\right]=\delta_{mn}$

---

- Same entanglement measures as before be applied to evaluate the operator entanglement

- Simplest example, analogous to Bell state, is SWAP operator

$$
\operatorname{\mathsf{SWAP}}=\frac{1}{2}\left[X\otimes X+Y\otimes Y+Z\otimes Z + \mathsf{1}\otimes\mathsf{1}\right]
$$

- All Schmidt coefficients are equal (maximum operator entanglement)

---

## Next lecture

- Some special circuits (random, dual unitary, ...)



