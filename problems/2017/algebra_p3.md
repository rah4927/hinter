---
id: fimo_2017_algebra_p3
year: 2017
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 3"
---

Let \(S\) be a finite set, and let \(\mathcal{A}\) be the set of all functions from \(S\) to \(S\). Let \(f\) be an element of \(\mathcal{A}\), and let \(T=f(S)\) be the image of \(S\) under \(f\). Suppose that \(f \circ g \circ f \neq g \circ f \circ g\) for every \(g\) in \(\mathcal{A}\) with \(g \neq f\). Show that \(f(T)=T\).

---
For \(n \geqslant 1\), denote the \(n\)-th composition of \(f\) with itself by
\[
f^{n} \stackrel{\text { def }}{=} \underbrace{f \circ f \circ \cdots \circ f}_{n \text { times }} .
\]
By hypothesis, if \(g \in \mathcal{A}\) satisfies \(f \circ g \circ f=g \circ f \circ g\), then \(g=f\). A natural idea is to try to plug in \(g=f^{n}\) for some \(n\) in the expression \(f \circ g \circ f=g \circ f \circ g\) in order to get \(f^{n}=f\), which solves the problem:
Claim. If there exists \(n \geqslant 3\) such that \(f^{n+2}=f^{2 n+1}\), then the restriction \(f: T \rightarrow T\) of \(f\) to \(T\) is a bijection.
Proof. Indeed, by hypothesis, \(f^{n+2}=f^{2 n+1} \Longleftrightarrow f \circ f^{n} \circ f=f^{n} \circ f \circ f^{n} \Longrightarrow f^{n}=f\). Since \(n-2 \geqslant 1\), the image of \(f^{n-2}\) is contained in \(T=f(S)\), hence \(f^{n-2}\) restricts to a function \(f^{n-2}: T \rightarrow T\). This is the inverse of \(f: T \rightarrow T\). In fact, given \(t \in T\), say \(t=f(s)\) with \(s \in S\), we have
\[
t=f(s)=f^{n}(s)=f^{n-2}(f(t))=f\left(f^{n-2}(t)\right), \quad \text { i.e., } \quad f^{n-2} \circ f=f \circ f^{n-2}=\text { id on } T
\]
(here id stands for the identity function). Hence, the restriction \(f: T \rightarrow T\) of \(f\) to \(T\) is bijective with inverse given by \(f^{n-2}: T \rightarrow T\).
It remains to show that \(n\) as in the claim exists. For that, define
\[
S_{m} \stackrel{\text { def }}{=} f^{m}(S) \quad\left(S_{m} \text { is image of } f^{m}\right)
\]
Clearly the image of \(f^{m+1}\) is contained in the image of \(f^{m}\), i.e., there is a descending chain of subsets of \(S\)
\[
S \supseteq S_{1} \supseteq S_{2} \supseteq S_{3} \supseteq S_{4} \supseteq \cdots
\]
which must eventually stabilise since \(S\) is finite, i.e., there is a \(k \geqslant 1\) such that
\[
S_{k}=S_{k+1}=S_{k+2}=S_{k+3}=\cdots \stackrel{\text { def }}{=} S_{\infty}
\]
Hence \(f\) restricts to a surjective function \(f: S_{\infty} \rightarrow S_{\infty}\), which is also bijective since \(S_{\infty} \subseteq S\) is finite. To sum up, \(f: S_{\infty} \rightarrow S_{\infty}\) is a permutation of the elements of the finite set \(S_{\infty}\), hence there exists an integer \(r \geqslant 1\) such that \(f^{r}=\) id on \(S_{\infty}\) (for example, we may choose \(r=\left|S_{\infty}\right| !\) ). In other words,
\[
f^{m+r}=f^{m} \text { on } S \text { for all } m \geqslant k .
\]
Clearly, (* ) also implies that \(f^{m+t r}=f^{m}\) for all integers \(t \geqslant 1\) and \(m \geqslant k\). So, to find \(n\) as in the claim and finish the problem, it is enough to choose \(m\) and \(t\) in order to ensure that there exists \(n \geqslant 3\) satisfying

\[
\left\{\begin{array} { l } 
{ 2 n + 1 = m + t r } \\
{ n + 2 = m }
\end{array} \Longleftrightarrow \left\{\begin{array}{l}
m=3+t r \\
n=m-2
\end{array}\right.\right.
\]
This can be clearly done by choosing \(m\) large enough with \(m \equiv 3(\bmod r)\). For instance, we may take \(n=2 k r+1\), so that
\[
f^{n+2}=f^{2 k r+3}=f^{4 k r+3}=f^{2 n+1}
\]
where the middle equality follows by \((* )\) since \(2 k r+3 \geqslant k\).
